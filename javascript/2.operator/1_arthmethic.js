/**
 * 사칙연산: +, -, *, /, %(모듈러, 나머지 연산자), **(지수연산자)
 */

let a = 3;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// 짝수, 홀수 선택하고 싶을때 사용하는게 모듈로 연산자 => %(modular, 나머지연산자)
let number = 100;
let number2 = 101;


// number 값이 짝수인지 홀수인지 구분하고 싶을때 => ex) number%2 나머지가 0이면 짝수, 1이면 홀수
console.log(number%2); // 짝수
console.log(number2%2); // 홀수

// 접합연산자(+) : + 기호 앞에 문자열이 출력되는 경우
console.log(10 + 10); // 20
console.log(10 + '10'); // 1010 문자열 섞이면 뒤는 무조건 문자열 됨
console.log('10' + 10); // 1010 문자열 섞이면 뒤는 무조건 문자열 됨
console.log('합계=' + (10 + 10)); // 문자열 섞이면 
console.log('홍길동' + '이순신'); // 홍길동이순신

