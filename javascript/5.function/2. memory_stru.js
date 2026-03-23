/**
 * 함수 생성 및 호출
 */

//데이터타입에 상관없이 add 함수가 정상적으로 실핼되도록 문자=>변환하는 함수 생성
function toNumber(num1, num2) {
    //숫자로 변환 후 반환
    return { num1: parseInt(num1), num2: parseInt(num2)};
}

// function이 먼저 호이스팅 되어서, 호출 가능함
add(100, 200);
add(200, 300);
add(1234, 23485);

//두 수를 입력하여, 합계를 출력
//호이스팅(hoisting)되어 add함구 호출 전 메모리에 저장 됨
function add(num1, num2) { //num1, num2는 add 블럭에서만 존재하는 지역번수로 선언
    // let n1 = parseInt(num1);
    // let n2 = parseInt(num2);
    let obj = toNumber(num1, num2); //결과: num1: parseInt(num1), num2: parseInt(num2)
    console.log(`sum = ${obj.num1+obj.num2}`);       
}

//add2 arrow 함수는 호이스팅이 되지 않으므로 에러 발생
// add2(100, 200);
// add2(200, 400);

//arrow function(화살표 함수)
//호이스팅 되지 않으므로, 반드시 선언한 후에 호출되어야 함
const add2 = (num1, num2) => {
    // let n1 = parseInt(num1);
    // let n2 = parseInt(num2);
    let obj = toNumber(num1, num2);
    console.log(`sum2 = ${obj.num1+obj.num2}`);    
}
console.log();
add2(100, 200);
add2('200', '400');
