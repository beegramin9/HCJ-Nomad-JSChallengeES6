const alertSection = document.querySelector(".alert"),
    alertExitButton = alertSection.querySelector('.alert__close__button')

const MAX_LENGTH = 21

function countIfTextMoreThanMaxLength(text) {
    if(text.value.length > MAX_LENGTH)  {
        alertSection.classList.add(CLASS_SHOWING);
    } else {
        alertSection.classList.remove(CLASS_SHOWING);
    }
}


function countIfFinishMoreThanFive() {
    console.log(JSON.parse(localStorage.finToDos).length);
    const numOfFinish = JSON.parse(localStorage.finToDos).length
    if (numOfFinish > 5) {
        alertSection.classList.add(CLASS_SHOWING);
    } else {
        alertSection.classList.remove(CLASS_SHOWING);
    }
}


function init() {
    /* countIfPendingMoreThanFive();  */
    /* 처음 로딩할때만 실시되는 중, 결국 pending에서 
    eventListener로 해야된단 얘기야... */
    countIfFinishMoreThanFive();
}

init();