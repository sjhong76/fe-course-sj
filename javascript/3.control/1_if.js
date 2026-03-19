/**
 * 제어문 : 조건 분기
 * 단일 if(조건절),
 * if(조건절) .. else,
 * if(조건절1) .. else if(조건절2).. else if(조건절3).. else..,
 * 
 * ★ 삼항 연산자 : (조건절)? [ture]statement1 : [false]statement2 ;
 * 
 */

// 입력되는 과일의 이름이 'apple'인 경우에만 이모지 출력
// 과일이름이 'apple'이 아닌 경우, 과일 이름을 출력
let fname = undefined;

fname = 'apple';
if(fname == 'apple') {
    console.log('🍎');
} else {
    console.log(fname);
    
}

// 삼항 연산자로 변환
let result = (fname == 'apple') ? '🍎' : fname;
console.log('삼항연산자 결과값: ', result);

//  선택한 메뉴를 출력
let menus = ['pizza', 'hotdog', 'coffee'];
if( menus[0] == 'pizza') {
    console.log('🍕');    
} else if(menus[1] == 'hotdog') {
    console.log('🌭');    
} else if(menus[1] == 'coffee') {
    console.log('☕');    
} else {
    console.log('메뉴를 선택해 주세요');
}

// 입력받은 숫자가 홀수이면 사과, 짝수이면 오렌지 출력
let number1 = undefined;
number1 = 121;
if(number1 % 2 === 1) {
    console.log("사과");
} else {
    console.log("오렌지");
}

let number2 = undefined;
let fresult = undefined;
number2 = 121;

if (!(number2%2)) {
    // console.log("사과");
    fresult = '🍎'
} else {
    // console.log("오렌지");
    fresult = '🟠'
}
console.log('실행결과 : ', fresult);

// 삼항 연산자로 변환
(!(number2%2)) ? fresult = '🍎' : fresult = '🟠';
console.log('실행결과(삼항) : ', fresult);
console.log(`실행결과(삼항) :  ${fresult}`);
