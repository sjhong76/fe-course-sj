/**
 * Date 클래스 - 날짜 형식을 지원하는 클래스
 * - new Date() 클래스 생성 후, 생성된 객체의 메소드를 호출한다. 
 * - getFullYear(), getMonth(), getDay()...
 */

let date1 = new Date();
let date2 = Date.now();
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

console.log(date1);
console.log(date2);
console.log(year);
console.log(month);
console.log(date);
console.log(`오늘은 ${year}년 ${month}월 ${date}일 입니다.`);
console.log(date1.toLocaleDateString('ko-KR'));
console.log(date1.toLocaleDateString('en-US'));
