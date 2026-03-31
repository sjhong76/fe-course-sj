/**
 * DOM객체를 생성하기 전 호출되는 함수
 */
window.addEventListener('DOMContentLoaded', function() {
    // this.alert('content 로드 완료!!');
    initForm();
});

//initForm() : content안에 추가되는 HTML 폼 생성 함수
function initForm() {
    let output = `
        <h1>Counter</h1>
        <div>
            <h2 id="number">0</h2>
            <button type="button" onclick="counter('+')">increment(+)</button>
            <button type="button" onclick="counter('-')">decrement(-)</button>
        </div>
    `;
    document.querySelector('#content').innerHTML = output;
}