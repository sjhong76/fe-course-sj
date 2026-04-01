let key = 'f247b305e4e797d0e2b59818f7413d9b';
let currentTargetDt = '20260101';
let currentKobis = null;

// 날짜 형식 변환: 2026-01-01 -> 20260101
const formatDate = (dateString) => {
    return dateString.replaceAll('-', '');
};

// API 주소 생성
const getDataUrl = (targetDt) => {
    return `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`;
};

// JSON 가져오기
const getJson = async (targetDt) => {
    const data_url = getDataUrl(targetDt);
    const response = await fetch(data_url);

    if (!response.ok) {
        throw new Error(`HTTP 오류: ${response.status}`);
    }

    return response.json();
};

// 테이블 렌더링
const renderTable = (kobis, movieList) => {
    let output = `
        <h2>${kobis.boxOfficeResult.boxofficeType}</h2>
        <h3>일자: ${kobis.boxOfficeResult.showRange}</h3>
        <table>
            <tr>
                <th>순위</th>
                <th>영화제목</th>
              th>개봉일자</th>
                <th  <>당일관객수</th>
                <th>누적관객수</th>
                <th>누적매출수</th>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KOBIS</title>
    <script src="2_kobis.js"></script>
</head>
<body>
    <h1>KOBIS BOX OFFICE</h1>
    <h3>선택: 
        <select name="type" id="type">
            <option value="default">선택</option>
            <option value="daily">일별</option>
            <option value="weekly">주간/주말</option>
        </select>
    </h3>
    <h3>날짜 : <input type='date' id="sdate">
        <button type='button' onclick="handleBoxOffice()">실행</button></h3>
    <div id="content"></div>
</body>
</html>

            </tr>
            ${
                movieList.length > 0
                    ? movieList.map((movie) => `
                        <tr>
                            <td>${movie.rank}</td>
                            <td>${movie.movieNm}</td>
                            <td>${movie.openDt || '-'}</td>
                            <td>${Number(movie.audiCnt).toLocaleString()}</td>
                            <td>${Number(movie.audiAcc).toLocaleString()}</td>
                            <td>${Number(movie.salesAcc).toLocaleString()}원</td>
                        </tr>
                    `).join('')
                    : `
                        <tr>
                            <td colspan="6">검색 결과가 없습니다.</td>
                        </tr>
                    `
            }
        </table>
    `;

    document.querySelector('#content').innerHTML = output;
};

// 날짜 기준 전체 조회
const show = async (targetDt = currentTargetDt) => {
    try {
        let kobis = await getJson(targetDt);
        console.log(kobis);

        currentTargetDt = targetDt;
        currentKobis = kobis;

        let dailyBoxOfficeList = kobis.boxOfficeResult.dailyBoxOfficeList;
        renderTable(kobis, dailyBoxOfficeList);

    } catch (error) {
        console.error('에러 발생:', error);
        document.querySelector('#content').innerHTML = `
            <div class="message">데이터를 불러오지 못했습니다.</div>
        `;
    }
};

// 선택한 날짜로 조회
const searchByDate = async () => {
    const searchDate = document.querySelector('#searchDate').value;

    if (!searchDate) {
        alert('날짜를 선택해 주세요.');
        return;
    }

    const targetDt = formatDate(searchDate);
    await show(targetDt);
};

// 현재 날짜 데이터에서 순위 검색
const searchByRank = () => {
    const rankValue = document.querySelector('#searchRank').value.trim();

    if (!rankValue) {
        alert('순위를 입력해 주세요.');
        return;
    }

    if (!currentKobis) {
        alert('먼저 날짜 조회를 해주세요.');
        return;
    }

    let dailyBoxOfficeList = currentKobis.boxOfficeResult.dailyBoxOfficeList;

    let filteredList = dailyBoxOfficeList.filter((movie) => {
        return movie.rank === rankValue;
    });

    renderTable(currentKobis, filteredList);
};

// 현재 날짜 기준 전체 목록 다시 보기
const resetList = () => {
    document.querySelector('#searchRank').value = '';

    if (!currentKobis) return;

    let dailyBoxOfficeList = currentKobis.boxOfficeResult.dailyBoxOfficeList;
    renderTable(currentKobis, dailyBoxOfficeList);
};

// 이벤트 등록
window.addEventListener('DOMContentLoaded', () => {
    show();

    document.querySelector('#btnDateSearch').addEventListener('click', async () => {
        await searchByDate();
    });

    document.querySelector('#btnRankSearch').addEventListener('click', () => {
        searchByRank();
    });

    document.querySelector('#btnReset').addEventListener('click', () => {
        resetList();
    });

    document.querySelector('#searchRank').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            searchByRank();
        }
    });

    document.querySelector('#searchDate').addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            await searchByDate();
        }
    });
});