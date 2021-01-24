let formula = "";

const buttons = document.querySelectorAll('.button')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

/* 이벤트핸들러로 하자 */

const operators = ['+','-','*','/','=']


/* 곱하기, 나누기할때만 2승들이 계쏙 되어야되고
+,-일때는 =을 해야먄 보여줘야 함 */
// function handleClick(event) {
//     const num = event.target.value;
//     if (num === '=') {
//         if (formula){
//             document.querySelector('#result').innerText = eval(formula);
//         } else {
//             /* 아무것도 입력하지 않았는데 = 누르면 그대로 0 */ 
//             document.querySelector('#result').innerText = "0";
//         }
//     } else if (num === 'C') {
//         formula = "";
//         document.querySelector('#result').innerText = "0";
//     } else if (num === "*" || num === '/') {
//         /* 할때마다 올라와야 하는데...
//         기호를 누르면 되긴 되는데.? */
// 
//         /* 아 그냥 기호만 할까... */
//         formula += num;
//         document.querySelector('#result').innerText = eval(formula);
//         /* 여기에 바로 올려서 승수가 가능한 것임
//         +, - 일땐 바로 안올리면 됨
//         
//         반대로*/
//         /* console.log(formula) */
//         console.log('더하기빼기')
//     } else {
//         formula += num;
//     }
// }

const initialValue

function handleClick(event) {
    const num = event.target.value;
    formula += num
   /*  if (operators.includes(num)) {

        // 중요한 것은 보여주는데애는 +-가 들어가면 안되지만...?
        console.log(1);
    } else {
        // 연산자 눌렀을 때는 안됨
        document.querySelector('#result').innerText = formula
        console.log(2);
    }  */
    
}

function handleStopButton() {
    /* 기호만 있으면 안됨 
    try-catch로 하면 이렇게 간단한 것을...*/
    try {
        document.querySelector('#result').innerText = eval(formula);
    } catch ( error ){
        document.querySelector('#result').innerText = '0';
        formula = ''
    }
}

function handleResetButton() {
    formula = ""
    document.querySelector('#result').innerText = "0"
}

function init() {
    /*  querySelectorAll은 Array비슷한 NodeList를 주는데 
    이것은 forEach메서드를 사용할 수 있습니다.*/
    buttons.forEach(button => button.addEventListener('click',handleClick));
    stopButton.addEventListener('click',handleStopButton);
    resetButton.addEventListener('click',handleResetButton);
}
init()