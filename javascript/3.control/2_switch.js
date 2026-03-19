/**
 * 제어문 : 조건 분기
 * switch(조건:숫자, 문자) {
 *      case 숫자, 문자 :
 *          실행문 ;
 *      break;
 *      case 숫자, 문자 :
 *          실행문 ;
 *      break;
 *      ..
 *      default : 실행문; //조건절에 해당하는 숫자 문자가 없는 경우
 * } *  
 */

// 선택한 숫자에 해당한느 요일을 출력
// 0:월요일, 1:화요일, 2:수요일
switch (0) {
    case 0:
        console.log('월요일');        
        break;
    case 1:
        console.log('화요일');        
        break;
    case 2:
        console.log('수요일');        
        break;
    default:
        console.log('요일을 선택해 주세요');        
        break;
}


// 입력받은 숫자가 홀수이면 사과, 짝수이면 오렌지 출력
let number = 122;

switch (number % 2) {
    case 1:
        console.log('🍎');
        break;
    case 0:
        console.log('🟠');
        break;
    default:
        console.log('숫자를 입력해 주세요');
        break;
}