/**
 * 호이스팅(hoisting) - 파일이 호출되면 실행 전 function 키워드의 함구들을 객체로 미리 메모리에 생성하는 작업
 * 
 */

//test1, test2 함수는 호이스팅 되므로 호출 시 정상 실행 됨
test1();
tset2();

function test1() {
    console.log(`---> test1`);    
}

function test2() {
    console.log(`---> test2`);    
}

//ES6 기준의 키뤄드 let, const로 정의된 함수는 호스팅되지 않음
//반드시 함수 실행 후 호출 되어야 함

//test3(); //ReferenceError, 호이스팅 안됨
//test4(); //ReferenceError, 호이스팅 안됨

const test3 = () => {
    console.log(`---> test1`);    
}

const test4 = () => {
    console.log(`---> test1`);    
}
