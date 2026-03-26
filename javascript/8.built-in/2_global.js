/**
 * 전역 함수로 최상위 개체에서 호출되는 함수
 * - 호출방법 : window.함수명
 * - 객체명을 생략할 수 있음
 * - window.alert(), window.confirm(), Nimber.parseInt(window.pPrseint)......
 * - enco
 */


let number = '123.4567';
let intNumber = Number.parseInt(number);
// let intNumber = window.parseInt(number); // 브라우저에서만 실행
let intNumber2 = Number.parseInt(number);
console.log('number =', number, typeof number);
console.log('intNumber =', intNumber, typeof intNumber);
console.log('intNumber2 =', intNumber, typeof intNumber2);

// URI 주소 인코딩, 디코딩
let uri = 'http://www.naver.com?name=홍길동';
let encodeUri = encodeURI(uri);
let decodeUri = decodeURI(encodeUri);

console.log(uri);
console.log(encodeUri);
console.log(decodeUri);
