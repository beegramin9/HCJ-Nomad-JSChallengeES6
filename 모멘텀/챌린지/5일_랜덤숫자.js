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
        /* 한번하고 refresh하면 없어져야 하는데 계속 추가되고 있음. 어떻게 하지?
        play를 누를 때 마다 refresh를 하면 되지...가 아니고
        if (없으면 고고) {} else 있을때 {있는거 지우고}  */

        if (result) {
            document.querySelector("#result").innerText = ""
        }
        /* 양끝값 포함 */
        const randomNumber = Math.floor(Math.random() * ( rangeValue + 1 ));
        
        const youChose = document.createElement('span');
        const machineChose = document.createElement('span');
        youChose.innerText = `You chose: ${inputValue}, `;
        machineChose.innerText = `The machine chose: ${randomNumber}.`;


        result.appendChild(youChose);
        result.appendChild(machineChose);
        const wonOrLost = document.createElement('div');

        console.log('inputValue',inputValue,'randomNumber',randomNumber)
        if (inputValue === randomNumber) {
            wonOrLost.innerText = `You Won!`;
        } else {
            wonOrLost.innerText = `You Lost!`;
        }
        wonOrLost.style.fontWeight = "900";
        result.appendChild(wonOrLost);
    }   
}


function init() {
    range.addEventListener('input',handleRange)
    form.addEventListener('submit',handleSubmit)
}
init();