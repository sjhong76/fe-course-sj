let key = `f247b305e4e797d0e2b59818f7413d9b`;
let targetDt = `20260101`;
const data_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`;


const getJson = async() => {
    // console.log(data_url);    
    let response = await fetch(data_url);
    return response.json();
}

const show = async() => {
    //1. JSON 데이터 가져오기
    let kobis = await getJson();
    console.log(kobis);

    //2. 출력 데이터 생성 : DHTML
    // dailyBoxOfficeList 변수 선언
    let dailyBoxOfficeList = kobis.boxOfficeResult.dailyBoxOfficeList;


    let output = `
        <h1>${kobis.boxOfficeResult.boxofficeType}</h1>
        <h3>일자: ${kobis.boxOfficeResult.showRange}</h3>
        <table border =1>
            <tr>
                <th>순위</th>
                <th>영화제목</th>
                <th>개봉일자</th>
                <th>당일관객수</th>
                <th>누적관객수</th>
                <th>누적매출수</th>
            </tr>
            ${
                dailyBoxOfficeList.map((movie) =>
                    `
                        <tr>
                            <th>${movie.rank}</th>
                            <th>${movie.movieNm}</th>
                            <th>${movie.openDt}</th>
                            <th>${Number(movie.audiCnt).toLocaleString()}</th>
                            <th>${Number(movie.audiAcc).toLocaleString()}</th>
                            <th>${Number(movie.salesAcc).toLocaleString()}</th>
                        </tr>
                    `
                ).join("")
            }
        </table>
    `;
    //3. 출력
    document.querySelector('#content').innerHTML = output;

}

window.addEventListener('DOMContentLoaded', () => {
    show();
})