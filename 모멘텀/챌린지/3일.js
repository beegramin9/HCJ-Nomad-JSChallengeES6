
/* 뭐가 선택됐는지 찾아야 함
그 value를 가져와야 함 
form을 만들수가 없으니
이벤트 핸들러로 해야 함*/

const menu = document.getElementsByTagName('select')[0]

const handleInput = () => {
    const country = menu.options[menu.selectedIndex].innerText
    localStorage.setItem("country", country);
}

function init() {
    menu.addEventListener('input',handleInput)
};

init();