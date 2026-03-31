/**
 * Spread Operator(전개 구문)
 * - 객체가 가지고 있는 요소를 펼쳐 놓음(전개함)
 * - iterable object, object literal
 * - 함수 호출시 : ex) myFunction(...객체명);
 * - 배열, 스트리으 오브젝트 리터럴 : ex) let testArray = [...객체명]; ..
 */

//배열 객체를 복사 :: shallow copy - 새로운 객체 생성(요소가 원시데이터 타입-독립적, 참조데이터-공유)
let numbers = [1, 2, 3, 4, 5];
// let copyNumbers = Array.from(numbers)
let copyNumbers = [...numbers];  //Array.from(numbers);을 사용할 수도 있다.
let concatNumbers = [...numbers, 100, ...copyNumbers]

console.log(numbers, typeof numbers);
console.log(copyNumbers, typeof copyNumbers);
console.log(concatNumbers, typeof concatNumbers);

//오브젝트 리터럴 복사
let fruit = {
    name: 'apple', 
    emoji: '🍎'
}
let copyFruit = {...fruit};
let updateFruit = {
    ...fruit,
    color: 'red'
}

console.log(fruit, typeof fruit);
console.log(copyFruit, typeof copyFruit);
console.log(updateFruit, typeof updateFruit);

let list = [
    {...fruit},
    {...copyFruit},
    {...updateFruit}
]

console.log(list, typeof list);
