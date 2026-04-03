let key = `6206e4e96646c240ac59f09bc0164ff9`;

const getJson = async(type, targetDt) => {
    const data_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${targetDt}`;
    let response = await fetch(data_url);
    return response.json();
}

const getMovieInfo = async(movieCd) => { 
    //영화상세  API를 통해 json 객체 가져오기
    let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;
    let response = await fetch(url);
    return response.json();
}

/** openModal */
const openModal = (infoObj) => {
    let modal = document.querySelector('#modal');
    let modalBody = document.querySelector('#modal-body');

    let output = `
        <div style="display:flex; gap:20px; align-items:flex-start;">
            <div>
                <img 
                    src="${infoObj.poster || ''}" 
                    alt="${infoObj.movieNm}" 
                    style="width:180px; border-radius:8px;"
                >
            </div>
            <div>
                <h3>[${infoObj.rank}] ${infoObj.movieNm}</h3>
                <ul>
                    <li><label>🎞 감독 : </label> ${infoObj.director}</li>
                    <li><label>🧑 배우 : </label> ${infoObj.actors}</li>
                </ul>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    modalBody.innerHTML = output;
}
window.addEventListener('DOMContentLoaded', () => {
    let modal = document.querySelector('#modal');
    let modalBody = document.querySelector('#modal-body');
    let modalClose = document.querySelector('#modal-close');

    modalClose.onclick = () => {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
    };
});





const handleMovieInfo = async (movieCd, rank, poster) => {
    let info = await getMovieInfo(movieCd);
    let movieNm = info.movieInfoResult.movieInfo.movieNm;
    let director = info.movieInfoResult.movieInfo.directors[0]?.peopleNm || '정보 없음';
    let actors = info.movieInfoResult.movieInfo.actors[0]?.peopleNm || '정보 없음';

    openModal({ movieNm, director, actors, rank, poster });
}

//poster 가져오기 : KMDB API
const searchMoviePoster = async (movieNm, openDt) => {
    const key = '59H5F0U0OFQB3R2261VM';
    let kmdb_url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api`;
    kmdb_url += `/search_json2.jsp?collection=kmdb_new2&detail=Y`;
    kmdb_url += `&title=${movieNm}`;
    kmdb_url += `&releaseDts=${openDt}&ServiceKey=${key}`;

    let response = await fetch(kmdb_url);
    let kmdb = await response.json(); 
    let data = await kmdb.Data[0].Result[0];
    let poster = null;
    if(data === null) {
        poster = [];
    } else {
        poster = await kmdb.Data[0].Result[0].posters.split("|");
    }
    
    return poster;
}


//handleBoxOffice 함수 정의
const handleBoxOffice = async() => {
    let type = document.querySelector('#type').value;
    let sdate = document.querySelector('#sdate').value;  
    
    if(type === 'default') {
        alert('타입을 선택해주세요');
        document.querySelector('#type').focus();        
    } else if(sdate === '') {
        alert('날짜를 선택해주세요');
        document.querySelector('#sdate').focus();
    } else {
        targetDt = sdate.split("-").reduce((acc, cur)=> acc+cur);
        let kobis = await getJson(type, targetDt); 
        let kobisBoxOffice =  kobis.boxOfficeResult;
        let kobisBoxOfficeList = null;
        let posterList = [];
        if(type === 'Daily') {
            kobisBoxOfficeList =  kobis.boxOfficeResult.dailyBoxOfficeList;
        } else {
            kobisBoxOfficeList =  kobis.boxOfficeResult.weeklyBoxOfficeList;
        }
        console.log(kobis);

        for(const movie of kobisBoxOfficeList) {
            //영화제목(movieNm), 개봉일(openDt)
            let movieNm = movie.movieNm;
            let openDt = movie.openDt.split("-").reduce((acc, cur)=>acc+cur);
            let posters = await searchMoviePoster(movieNm, openDt);
            posterList.push(posters[0]);   
        }
    
        let output = `
            <h1>${kobisBoxOffice.boxofficeType}</h1>
            <h3>${kobisBoxOffice.showRange}</h3>
            <table border=1>
                <tr>
                    <th>순위</th>
                    <th>영화제목</th>
                    <th>개봉일</th>
                    <th>당일관객수</th>
                    <th>누적관객수</th>
                    <th>누적매출액</th>
                </tr>
                ${
                    kobisBoxOfficeList.map((movie, idx) => `
                        <tr>
                            <td>${movie.rank}</td>
                            <td>
                                <img src="${posterList[idx]}" style="width:80px;">
                                <a href="#" onclick="handleMovieInfo('${movie.movieCd}', '${movie.rank}', '${posterList[idx]}')">${movie.movieNm}</a>
                            <td>${movie.openDt}</td>
                            <td>${parseInt(movie.audiCnt).toLocaleString()}</td>
                            <td>${parseInt(movie.audiAcc).toLocaleString()}</td>
                            <td>${parseInt(movie.salesAcc).toLocaleString()}</td>
                        </tr>
                    `).join("")
                }
            </table>
        `;

        document.querySelector('#content').innerHTML = output;
    } 
    
}