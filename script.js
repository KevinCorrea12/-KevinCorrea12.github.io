const buttons = document.querySelectorAll('.btn');
const display = document.querySelector('.calculator__result');
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '0';
        } else if (value === '=') {
            if (previousInput && operator && currentInput) {
                currentInput = evaluate(previousInput, operator, currentInput);
                display.textContent = currentInput;
                previousInput = '';
                operator = '';
            }
        } else if (['+', '-', 'x', '÷'].includes(value)) {
            if (previousInput && operator && currentInput) {
                currentInput = evaluate(previousInput, operator, currentInput);
                display.textContent = currentInput;
            }
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});

function evaluate(a, operator, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return a * b;
        case '÷':
            return a / b;
        default:
            return b;
    }
}

document.getElementById('currentYear').textContent = new Date().getFullYear();
