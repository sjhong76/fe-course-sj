
/**
 * 숫자 증가/감소 함수 정의
 */
function counter(type) {
    //input type : value, <tag>content</tag> : textContent
    let number = document.querySelector('#number').textContent;
    console.log(type, number);

    if(type === '+') {
        if(number >= 0) {
            document.querySelector('#number').textContent = ++number;
        }
    } else {
        if(number > 0) {
            document.querySelector('#number').textContent = --number;
        }
    }    
}
