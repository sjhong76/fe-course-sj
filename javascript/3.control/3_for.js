/**
 * 제어문 : 반복 실행
 * - for : 내가 정확하게 몇번 반복해야하는지 반복 횟수를 알고 있을 때 사용하는 것이 좋다.   배열과 아주 친함
 * - while : 종료되는 시점을 알고 있는 경우 사용하는 것이 좋다. 
 * 
 * for( (1)초기값 ; (2)조건절 ; (4)증가값 ) {
 *      (3)실행문;
 * }
 * - for문이 실행되는 순서 : 1 > 2 > 3 > 4 > [2 > 3 > 4] 반복 실행, 조건이 false가 될 때까지
 * - 초기값 선언시 키어드는 반드시 let으로 정의
 */

// 1부터 10까지 출력
// 초기값 - for  블록에서만 사용되는 변수

for(let i = 1 ; i <= 10 ; i++) {
    console.log(i);    
}

// 숫자 배열을 생성하고 내용을 출력
const numbers = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];
for(let i=0 ; i < numbers.lenght ; i++) {
    console.log(`numbers[${i}] = ${numbers[i]}`);    
}

// 과일이 레몬이면 이모지 출력
let fruits = ['apple', 'orange', 'lemon', 'mango', 'banana'];
let emojis = ['🍎', '🟠', '🍋', '🥭', '🍌'];
for(let i=0; i < fruits.length; i++) {
    if (fruits[i] == 'lemon') {
        console.log(fruits[i], emojis[i]);
    }
}