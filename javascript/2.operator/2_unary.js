/**
 * 단항 연산자 : ++, --, !, !!
 */
let a = 10;
console.log(++a); // 전위, 11
console.log(a++); // 후위, 출력되는 a=11, 메모리의 a=12
console.log(a); // 현재 메모리 값 출력

let b = 10;
console.log(b--); // 후위, 출력되는 b=10, 메모리의 b=9
console.log(--b); // 전위, 8
console.log(b); // 전위, 8
console.log(++b); // 전위, 9
console.log(b++); // 후위, 출력되는 b=9, 메모리의 b=10
console.log(b); // 현재 메모리 값 10 출력

let flag = true;
console.log(flag); // true
console.log(!flag); // false
console.log(!!flag); // true



