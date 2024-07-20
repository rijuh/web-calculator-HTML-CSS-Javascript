let display = document.getElementById('display');

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    display.innerText += operator;
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === '') {
        display.innerText = '0';
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendNumber(key);
    } else if (key === '+') {
        appendOperator('+');
    } else if (key === '-') {
        appendOperator('-');
    } else if (key === '*') {
        appendOperator('*');
    } else if (key === '/') {
        appendOperator('/');
    } else if (key === 'Enter') {
        event.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
