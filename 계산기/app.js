/* https://kanhi.tistory.com/6?category=807466 */
const buttons = document.querySelectorAll('.button')
const displayElement = document.querySelector('input')

/* 예외처리
1. 2++3 처럼 연산자를 연속으로 입력할 수 있다.
2. +3 처럼 숫자보다 연산자를 먼저 입력할 수 있다.
3. 6* 처럼 식이 완전하게 끝나지 않은 사태에서 = 버튼을 클릭하면 에러가 발생한다.

4. 2+3 = 5로 계산이 끝난 뒤 새로운 계산을 하기 위해 3을 입력하면 53으로 표시된다.
= 버튼을 클릭 후 숫자를 클릭한다면 AC기능과 비슷하게 새로운 식 입력을 시작하는거니
appendNumber 메서드에서 this.displayContent += number로 숫자가 추가되던걸
= 버튼을 클릭 후 처음으로 숫자를 클릭할 때만 this.displayContent = number로 바로 초기화되게 한다.
= 버튼을 클릭했는지 알아내기 위해 operatorCheck처럼 equalsCheck 속성을 하나 추가해 = 버튼 클릭 여부를 관리한다 */

class Calculator {
    constructor(displayElement) {
        this.displayElement = displayElement
        this.displayContent = '' // 계산되고있는 숫자들
        // 2번, 처음부터 연산자가 입력되는 걸 막기 위해 기본값을 true로 변경
        this.operatorCheck = true 
        this.equalsCheck = false // 4번, 버튼클릭여부
    }

    appendNumber(number) {
        if (this.equalsCheck) {
            this.displayContent = number // 새로운 식 입력, 초기화
            this.equalsCheck = false
        } else {
            this.displayContent += number // 문자열 concatnation

        }
        this.operatorCheck = false // 1번, 숫자 입력 시 다음에 연산자 올 수 있게 false
    }


    appendOperator(operator) {
        if (this.operatorCheck) return // 1번, 이미 연산자가 입력된 상태
        if (this.equalsCheck) this.equalsCheck = false // 4번
        this.displayContent += operator
        return this.operatorCheck = true
    }

    updateDisplay() {
        this.displayElement.value = this.displayContent
    }

    reset() {
        this.displayContent = ''
        this.displayElement.value = 0
        /* reset 이후에 연산자가 입력될 수 없도록 막는다 */
        this.operatorCheck = true
    }

    compute() {
        // 3번, 연산자가 마지막으로 입력되었을 때
        if (this.operatorCheck) return 
        this.displayContent = eval(this.displayContent)
        this.equalsCheck = true
    }
}
const calculator = new Calculator(displayElement)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                console.log('operator');
                if ( calculator.appendOperator(button.innerText) ) {
                    calculator.updateDisplay()
                }
                break
            case 'reset':
                console.log('reset');
                calculator.reset();
                break
            case 'equal':
                console.log('equal');
                calculator.compute();
                calculator.updateDisplay();
                break
            default:
                console.log('number');
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    }
)})

