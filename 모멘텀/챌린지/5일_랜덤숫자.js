const range = document.querySelector('#range'),
    showRangeValue = document.querySelector('#showRangeValue');

const form = document.querySelector('#form'),
    input = form.querySelector('#input')

function handleRange(event) {
    const rangeValue = event.target.value;
    showRangeValue.innerText = rangeValue;
}
function handleSubmit(event) {
    event.preventDefault();
    const inputValue = parseInt(input.value);
    const rangeValue = parseInt(showRangeValue.innerText);
    const result = document.querySelector("#result")
    if (inputValue <= rangeValue) {
        const randomNumber = Math.floor(Math.random() * rangeValue)
        /* 랜덤해서 나온 결과, 그리고 value값을 결정 해야 함
        이렇게 하면 안되고 create으로 해야함 */

        const youChose = document.createElement('span');
        const machineChose = document.createElement('span');
        youChose.innerText = `You chose: ${inputValue}, `;
        machineChose.innerText = `The machine chose: ${randomNumber}`;
        result.appendChild(youChose);
        result.appendChild(machineChose);
        /* 한번하고 refresh하면 없어져야 하는데 계속 추가되고 있음. 어떻게 하지?  */
        const wonOrLost = document.createElement('div');
        if (inputValue === rangeValue) {
            wonOrLost.innerText = `You won!`;
        } else {
            wonOrLost.innerText = `You Lost!`;
        }
        result.appendChild(wonOrLost);
    }   
}


function init() {
    range.addEventListener('input',handleRange)
    form.addEventListener('submit',handleSubmit)
}
init();