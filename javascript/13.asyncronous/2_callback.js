/**
 * callback : 함수의 인자에 입력되는 함수로직, anonymous(무기명) 함수라고도 불린다.
 * - setTimeout(callback, delay)
 */
function runDelay(callback, delay) {
    setTimeout(callback, delay);
}

runDelay(()=>{
    console.log(`3초 후에 Task Queue에 저장된데이~`);    
}, 3000);  //3초후에 Task Queue에 저장됨, 이벤트 루프에 의해서 돌아가면, 콜스텍이 callback 함수가 실행됨

runDelay(function() {
    console.log(`3초 후에 바로 저장된데이~`);    
});  //3초후에 Task Queue에 저장됨, 이벤트 루프에 의해서 돌아가면, 콜스텍이 callback 함수가 실행됨

runDelay(()=>{
    console.log(`1초 후에 Task Queue에 저장된데이~`);    
}, 1000);  //3초후에 Task Queue에 저장됨, 이벤트 루프에 의해서 돌아가면, 콜스텍이 callback 함수가 실행됨

console.log('-----------프로그램 종료------------');
