/* 2 요소를 가지오기 */

/* querySelectorAll은 Array로 모든 태그를
querySelector는 첫번째 태그  */
const form = document.querySelector(".js-form"),
      input = form.querySelector('input'),
      greeting = document.querySelector('.js-greeting')
const USER_LS = 'currentUser',
      Showing_CL = 'showing'

function saveName(text) {
    /* JSON형태, key-value값 */
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    /* preventDefault
    event가 발생하면 default적으로 root에서, 즉 form에서 발생한다.
    form 이벤트의 default는 post처럼 다음 페이지로 넘어가려고 하는 것.
    이 새로고침하고 다음 어디론가 넘어가려는 성질을 막는 것이 preventDefault */
    event.preventDefault();
    // input의 value를 가져오기
    const currentValue = input.value;
    // 받아온 value를 색칠하자
    writeGreeting(currentValue)
    // 아직까지는 저장하지 않았으므로 새로고침하면 날라감
    saveName(currentValue)
}


// currentUser가 없을 때
function askForName() {
    // form을 나타나게 하고 사용자 이름을 입력받음
    form.classList.add(Showing_CL);
    /* form이 생겼긴 한데, submit할 때 아무런 변화가 없음
    즉 submit 이벤트 핸들러를 만들면 submit 이후의 일을 콘트롤 가능 */
    form.addEventListener('submit',handleSubmit)

}

// currentUser가 이미 있을 때
function writeGreeting(text) {
    /* 이름을 다시 받을 필요가 없으므로 form을 숨기고 
    text의 색을 바꾸자 */
    form.classList.remove(Showing_CL);
    greeting.classList.add(Showing_CL);
    greeting.innerText = `Hello ${text}`;
}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS)
    if (!currentUser) {
        askForName()
    } else {
        writeGreeting(currentUser)
    }
}



function init() {
    loadName()
}
init()
