// The text of the title should change when the mouse is on top of it.
// The text of the title should change when the mouse is leaves it.
// When the window is resized the title should change.
// On right click the title should also change.
// The colors of the title should come from a color from the colors array.
// DO NOT CHANGE .css, or .html files.

// ALL function handlers should be INSIDE of "superEventHandler"
/* 요게 무슨뜻이징? superEventHandler 라는 객체를 만든 다음에 하는 것*/

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

/* HTML 수정하면 안됨. 
맨 처음 받을 때 태그로 받은 다음
여기서 아이디랑 클래스 다 줘야 함
그래야지 css가 됨 */


const title = document.getElementsByTagName('h2')[0]


const superEventHandler = {
    mouseEnter: function () {
        title.innerText = "The mouse is here!";
        title.style.color = colors[0];
 
    },
    mouseLeave: function () {
        title.innerText = "The mouse is gone!";
        title.style.color = colors[1];
    
    },
    rightClick: function () {
        title.innerText = "That was a right click!";
        title.style.color = colors[4];
    },
    reSize: function () {
        title.innerText = "You just resized!";
        title.style.color = colors[2];
    }
}


function init() {
    title.addEventListener("mouseenter",superEventHandler.mouseEnter);
    title.addEventListener("mouseleave",superEventHandler.mouseLeave);
    window.addEventListener("contextmenu",superEventHandler.rightClick);
    /* 웹페이지 아무곳에나 눌러도 작동해야함 */
    window.addEventListener('resize', superEventHandler.reSize );
};

init();