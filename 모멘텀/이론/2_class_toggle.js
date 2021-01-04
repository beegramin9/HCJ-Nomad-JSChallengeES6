/* 1_logic.js에서는 JS의 CSS를 변경하는 로직이었다.
이제부터는 HTML은 HTML 파일에서만, CSS는 CSS 파일에서만,
JS는 HTML의 CSS를 직접적으로 변경하는 것이 아닌 로직만 관여하게 할 것 */

const title = document.getElementById('title');

const CLICKED_CLASS = "clicked";

function handleClick1() {
    /* 해당 새로운 클래스의 color를 정해놓은 다음
    HTML 태그의 클래스 이름을 변경하면 
    개별적으로 HTML의 CSS를 건들지 않아도 조작 가능 */
    const currentClass = title.className;
    console.log("기존",currentClass);
    const hasClass = title.classList.contains(CLICKED_CLASS)

    /* 구형 로직은 버튼이 눌리면 btn.class가 되므로 
    계속 CLICK_CLASS를 추가하게 되고, 클래스는 중복이 없으니
    계속 if문으로만 들어오게 된다. */
    //if (currentClass !== CLICKED_CLASS) {

    /* 클래스가 CLICKED_CLASS를 포함하지 않으면? */
    if (!hasClass) {

        // title.className = CLICKED_CLASS;
        title.classList.add(CLICKED_CLASS);
        console.log("추가",title.classList);
    } else {
        // title.className = ""
        title.classList.remove(CLICKED_CLASS);
        console.log("제거",title.classList);
    }
    /* 위와 같은 작업을 할 때 해당 CSS 태그에
    transition: color .5s ease-in-out 을 주면
    0.5초 간격을 두고 그라데이션으로 색이 바뀜*/
}

/* !! 타겟 태그가 원래 class를 가지고 있었을 때는 버그가 발생할 수 있다.
ex) <h1 id="title" class="btn">
    .btn { cursor: pointer;}
class가 clicked로 바뀌는 순간 pointer가 사라지게 된다.

해결: class 이름을 바꿔버리는 게 아니라
classList 객체의 add 메소드를 사용해서 추가한다. */


/* toggle은 있으면 remove, 없으면 add를 자동적으로 해준다
toggle: a key or command that toggles between two modes, such as the caps lock key.
위 코드를 한 줄로 사용 가능 */
function handleClick2() {
    title.classList.toggle(CLICKED_CLASS)
}




function init() {
    title.addEventListener('click', handleClick2)
}

init();