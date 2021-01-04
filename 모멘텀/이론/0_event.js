/* Alert Message */
// alert('I\'m working. I am JS. I am beatiful and worth it.');
/* Console */
// console.log('I\'m working. I am JS. I am beatiful and worth it.');

const calculator = {
    plus : function(a,b) {
        return a + b
    },
    minus : function(a,b) {
        return a - b
    },
    multiply : function(a,b) {
        return a * b
    },
    divide : function(a,b) {
        return a / b
    },
    power : function(a,b) {
        return a ** b
    }
}

/* document is also an object. */
const title = document.getElementById("title");
/* 
JS takes HTML elements and turns them into object(DOM).
DOM(Document Object Module)으로 바꾼다.
HTML이 객체가 되므로 .으로 속성에 접근하고 속성을 바꿀 수 있다.
*/
console.log(title);

title.innerHTML = 'Hi! From JS'
// title.style.color = 'yellow'

/* 
console.log: HTML 태그를 그냥 HTML 태그로 보여줌
console.dir: HTML 태그(이젠 JS에 의해 객체로 변한, 즉 객체의) 모든 속성을 보여줌
title 객체로 할 수 있는 모든 것을 보여줌
 */
// console.dir(title);
console.dir(document);

// HTML 문서(웹 페이지)의 타이틀
document.title = 'I own you now'

// css 셀렉터와 똑같이 작동합니다.
const query = document.querySelector('#title')
// Cannot set property 'innerHTML' of null. 100퍼 오타나서 id나 class 잘못 찾은거야
console.log(query);

/* 
JS는 이벤트에 반응하기 위해 만들어짐
이벤트는 무엇이냐? 웹사이트에서 일어나는 모든 것들 
click, resize, submit, input, change, load, before, closing...
JS로 이런 이벤트들을 intercept(가로챌) 수 있음
*/

/* form은 submit이란 이벤트를 가지고 있음(input은 없음) */
/* 이벤트 리스너: 이벤트가 발생하면 듣는 것이지. 다시 말하면
이벤트가 발생할때까지 기다리고 발생하면 뭘 하는 탐지기같은 것 */
function handleResize(event){
    console.log(event);
    // console.log('I have been resized.');
}
window.addEventListener('resize', handleResize )
// resize라는 이벤트를 대기하는 이벤트리스너
/* 근데 모든 이벤트를 대기하는 것은 시간이 너무 길어지니까 두번째 인수로
함수(이벤트 핸들러)를 넣어서 */
/*
근데 함수 쓸 때 () 붙여쓰면 안됨! 마치 map함수 쓸때처럼 
함수 이름만 있으면 필요할 때, 즉 이벤트가 발생했을 때만 가져오는 거고
()를 붙이면 이벤트 상관없이 실행하면 바로 실행됨
 */

/* 만약 이벤트핸들러에 event라는 파라미터를 주면?
Q. 이벤트는 어디에서 온 거지?
이벤트핸들러를 만들 때마다 JS는 자동적으로 event 객체를 함수에 넣는다.
마치 콜백함수의 error처럼
그래서 event 파라미터를 주고 handleResize처럼 괄호 없이 쓰면
resize 이벤트가 발생할 때만 해당 event(여기서는 resize)를 console.log로 보여준다

=> form이나 login 할때 좋음
*/

/* title(HTML객체)는 click 이벤트를 가지고있음 */
function handleClick(event){
    title.style.color = 'blue'
}
title.addEventListener('click',handleClick)
/* 문제는 파란색으로 한번 바뀌면 그 다음엔 할 수 있는게 없음, 어떻게 할지는 다음 강의에서 */
/* */

const age = prompt('How old are you?')
/* 맨 처음엔 console에 age가 없고 타이틀도 안 바뀜. 왜? prompt에 답을 할 때까지 멈춰있잖아 */
console.log(age);

if(age>=18 && age<=21){
    console.log('You can drink but you should not');
}else{
    console.log('You can\'t drink');
}
