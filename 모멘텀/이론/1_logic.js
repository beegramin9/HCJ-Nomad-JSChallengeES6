const title = document.getElementById("title");

// 이벤트 핸들러로 색깔값 체크하기

/* rgb, 띄어쓰기가 제대로 되지 않으면 정상작동하지 않는다. */
const BASE_COLOR = 'rgb(255, 10, 255)'
console.log(BASE_COLOR);
// flatuicolors.com
const OTHER_COLOR = "#7f8c8d"
console.log(OTHER_COLOR);

function handleClick() {
    // 현재 색깔 확인
    const currentColor = title.style.color;
    console.log(currentColor);

    /* 최초 색은 init() 때문에 BASE_COLOR과 같을 것 
    따라서 색이 OTHER_COLOR로 바뀐다. */
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    /* 두번째부터는 이미 색이 OTHER_COLOR로 바꼈기 때문에
    else문이 실행된다. 다시 BASE_COLOR로 돌아감 */    
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("mouseenter",handleClick);
    /* https://developer.mozilla.org/ko/docs/Web/Events
    click, 마우스가 들어갈 때 이벤트인 mouseenter */
}
init();

function handleOnline() {
    console.log('Wifi connected');
}
function handleOffline() {
    console.log('Bye');
}

window.addEventListener('online', handleOnline)
window.addEventListener('offline', handleOffline)