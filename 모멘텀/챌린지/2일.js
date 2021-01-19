// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const h2 = document.querySelector("h2");

const body = document.querySelector("body");

const superEventHandler = {
    getWindowWidth: function () {
    /* let bgColor = body.style.backgroundColor
    bgColor = 'color'
    작동 안되는 이유는 bgColor 변수에 'color'라는 스트링이 들어가기 때문 */
    h2.style.color = "white";

    let width = window.innerWidth;
    
    console.log(width);
    if (width < 800) {
        body.style.backgroundColor = "#2c8cd3"; /* 파랑 */
    } else if (width < 1200) {
        body.style.backgroundColor = "#8f4dac"; /* 보라 */
    } else {
        body.style.backgroundColor = "#edbb12"; /* 노랑 */
    }
  }
};

/* 맨 처음 시작했을 때, 즉 resize 이벤트가 없었을 때도 색이 변할 수 있도록 */
superEventHandler.getWindowWidth();

function init() {
  window.addEventListener("resize", superEventHandler.getWindowWidth);
}

init();
