/**
 * callback(콜백)함수 - 함수의 파라미터에 입력되는 익명함수(anonymous)
 */
const job = (a, b, callback) => {
    // console.log(a, b);
    callback(a, b);
}

job(1, 2, (a, b)=>{ console.log(a, b)});
job(10, 20, (a, b)=>{ console.log(a + b)});

