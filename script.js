// declares number buttons
const zeroButton = document.getElementById('zero-btn');
const oneButton = document.getElementById('one-btn');
const twoButton = document.getElementById('two-btn');
const threeButton = document.getElementById('three-btn');
const fourButton = document.getElementById('four-btn');
const fiveButton = document.getElementById('five-btn');
const sixButton = document.getElementById('six-btn');
const sevenButton = document.getElementById('seven-btn');
const eightButton = document.getElementById('eight-btn');
const nineButton = document.getElementById('nine-btn');

// declares operator buttons
const plusButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');
const multiplyButton = document.getElementById('multiply-btn');
const divideButton = document.getElementById('divides-btn');
const equalsButton = document.getElementById('equals-btn');
const clearButton = document.getElementById('clear-btn');


const screen = document.getElementById('screen');

let currentNumber = ""; // The number currently being entered
let previousNumber = ""; // The stored number
let operator = null; // The chosen operator

function calculator(instruction) {
    // Check if the input is a number (0-9)
    if (instruction >= 0 && instruction <= 9) {
        currentNumber += instruction; // Append the number
        screen.value = currentNumber; // Display the updated number
    }

    // Addition
    if (instruction === 10) {
        handleOperator("+");
    }

    // Subtraction
    if (instruction === 11) {
        handleOperator("-");
    }

    // Multiplication
    if (instruction === 12) {
        handleOperator("*");
    }

    // Division
    if (instruction === 13) {
        handleOperator("/");
    }

    // Equals
    if (instruction === 14) {
        calculateResult();
    }

    // Clear
    if (instruction === 15) {
        clearCalculator();
    }
}

function handleOperator(op) {
    if (currentNumber !== "") {
        if (previousNumber !== "") {
            calculateResult(); // Perform previous calculation if an operator was already selected
        }
        previousNumber = currentNumber; // Store the current number
        currentNumber = ""; // Reset the current number
    }
    operator = op; // Store the operator
}

function calculateResult() {
    if (previousNumber !== "" && currentNumber !== "" && operator) {
        const num1 = parseFloat(previousNumber);
        const num2 = parseFloat(currentNumber);

        let result = 0;
        if (operator === "+") result = num1 + num2;
        if (operator === "-") result = num1 - num2;
        if (operator === "*") result = num1 * num2;
        if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Error"; // Handle division by zero

        screen.value = result; // Display the result
        previousNumber = result.toString(); // Store the result for further calculations
        currentNumber = ""; // Reset the current number
        operator = null; // Reset the operator
    }
}

function clearCalculator() {
    currentNumber = "";
    previousNumber = "";
    operator = null;
    screen.value = "0"; // Reset the screen
}



zeroButton.addEventListener('click', function() {
    calculator(0);
});

oneButton.addEventListener('click', function() {
    calculator(1);
});

twoButton.addEventListener('click', function() {
    calculator(2);
});

threeButton.addEventListener('click', function() {
    calculator(3);
});

fourButton.addEventListener('click', function() {
    calculator(4);
});

fiveButton.addEventListener('click', function() {
    calculator(5);
});

sixButton.addEventListener('click', function() {
    calculator(6);
});

sevenButton.addEventListener('click', function() {
    calculator(7);
});

eightButton.addEventListener('click', function() {
    calculator(8);
});

nineButton.addEventListener('click', function() {
    calculator(9);
});

plusButton.addEventListener('click', function() {
    calculator(10);
});

minusButton.addEventListener('click', function() {
    calculator(11);
});

multiplyButton.addEventListener('click', function() {
    calculator(12);
});

divideButton.addEventListener('click', function() {
    calculator(13);
});

equalsButton.addEventListener('click', function() {
    calculator(14);
});

clearButton.addEventListener('click', function() {
    calculator(15);
});






