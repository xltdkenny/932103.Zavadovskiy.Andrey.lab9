const operation = '+-/*';
const digits = '1234567890';
var previousOperandTextElement = document.querySelector('[data-previous-operand]');
var currentOperandTextElement = document.querySelector('[data-current-operand]');
var numberButtons = document.querySelectorAll('[data-number]');

currentOperandTextElement.textContent = '0';

function isValid(str) {
  return /^[-+*/0-9.]+$/.test(str);
}

function clearDisplay() {
  currentOperandTextElement.textContent = '0';
  previousOperandTextElement.textContent = '';
}

function addNumber(number) {
    if (currentOperandTextElement.textContent == '0' || !(isValid(currentOperandTextElement.textContent))) {
      currentOperandTextElement.textContent = ''
    }
    currentOperandTextElement.textContent += number;
}

function applyOperation(operation)
 {
    if(currentOperandTextElement.textContent == '')
    {
        previousOperandTextElement.textContent = previousOperandTextElement.textContent.slice(0, -1) + operation;
        return;
    }
    if(!isValid(currentOperandTextElement.textContent))
    {
        clearDisplay();
        return;
    }
    if(currentOperandTextElement.textContent[currentOperandTextElement.textContent.length - 1] == '.') currentOperandTextElement.textContent = currentOperandTextElement.textContent.slice(0, -1);

    previousOperandTextElement.textContent += currentOperandTextElement.textContent + ' ' + operation;
    currentOperandTextElement.textContent = '';

}

function calculate()
{
    currentOperandTextElement.textContent = eval(previousOperandTextElement.textContent + currentOperandTextElement.textContent);
    previousOperandTextElement.textContent = '';
}

function addDot()
{
    if(isValid(currentOperandTextElement.textContent) && currentOperandTextElement.textContent[currentOperandTextElement.textContent.length - 1] != '.')
        currentOperandTextElement.textContent += '.';
}

function back()
{
    if(!isValid(currentOperandTextElement.textContent) )
    {
        clearDisplay();
        return;
    }
    if(currentOperandTextElement.textContent.length == 1) currentOperandTextElement.textContent = '0';
    else currentOperandTextElement.textContent = currentOperandTextElement.textContent.slice(0, -1);
}

