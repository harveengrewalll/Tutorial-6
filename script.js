// use DOM queries to get access to the DOM elements that you need
const display = document.getElementById('display');
const digitButtons = document.querySelectorAll('.digit');
const operationButtons = document.querySelectorAll('.operation');
const clearButton = document.getElementById('btnClear');
const equalButton = document.getElementById('btnEqual');

// link the displayDigit function to the click event of the digit buttons
digitButtons.forEach(button => {
    
    button.addEventListener('click', displayDigit);
});

//link the operationClicked function to the click event of the operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', operationClicked)
});

equalButton.addEventListener('click', equalClicked);

// Define the displayDigit function to be added as an event listener to the buttons representing the
// digits so that when the button is clicked the digit it represents would be concatenated
// to the contents of the display label
function displayDigit(event) {
    if (calculationDone) {
        display.innerText = '';
        calculationDone = false;
    }
    const digit = event.target.innerText;
    if (display.innerText === '0' || display.innerText === '') {
        display.innerText = digit; // Replace "0" or empty with the new digit
    } else {
        display.innerText += digit; // Append the digit
    }
}

// set the click event of the clear button
// to an anonymous function that clears the text of the display lable
clearButton.addEventListener('click', () => {
    display.innerText = '';
    firstValue = null;
    secondValue = null;
    operation = null;
});

let firstValue, secondValue, operation;
let calculationDone = false;

//Define the operationClicked function to handle the click event of the operation buttons
//The function body should include the following steps:
    //Convert the value in the display label into a number and store it in the variable firstValue
    //Store the text of the clicked button in the variable 'operation' for latter reference
    //Clear the display lable to allow the user to enter the second value
    
function operationClicked(event) {
    firstValue = parseFloat(display.innerText);
    operation = event.target.innerText;
    display.innerText = ''
}

//Define the equalClicked function to handlet the click event of the equal button with the following steps
    //Convert the value in the display label to a number and store it in the variable secondValue
    // based on the value stored in the operation apply the corresponding operator on the first and second values
    // and display the result in the display label.

function equalClicked() {
    secondValue = parseFloat(display.innerText);
    let result;
    switch (operation) {
        case '+':
            result = firstValue + secondValue;
            break;

        case '-':
            result = firstValue - secondValue;
            break;

        case '*':
            result = firstValue * secondValue;
            break;

        case '/':
            result = firstValue / secondValue;
            break;
            
        default:
            result = 'Error';
            break;    
    }

    display.innerText = result;
    firstValue = result;
    secondValue = null;
    operation = null;
    calculationDone = true;
}
