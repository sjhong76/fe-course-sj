/**
 * 논리 연산자 : &&(and), ||(or)
 * 
 * 논리식1(boolean) && 논리식2(boolean) = 결과값(boolean)
 * 논리식1(boolean) || 논리식2(boolean) = 결과값(boolean)
 * - && 연산자는 논리식1, 2가 모두 true인 경우에만 true값을 갖는다
 * - || 연산자는 논리식 중 1개만 true여도 true값을 출력
 */

let a = 3;
let b = 7;

console.log('----- && : AND ------');
console.log((a < b) && (a > b)); // true && false
console.log((a < b) && (a == b)); // true && false
console.log((a == b) && (a < b)); // false && true
console.log((a < b) && (a !== b)); // true && true

console.log('----- || : AND ------');
console.log((a == b) || (a > b)); // true || false
console.log((a < b) || (a == b)); // true || false
console.log((a == b) || (a < b)); // false || true
console.log((a < b) || (a !== b)); // true || true
