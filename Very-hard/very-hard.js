let num1 = prompt("Give me your first number.");
let num2 = prompt("Give me your second number.");

function add(num1, num2) {
    let suma = num1 + num2;
    return suma;
}
function subtract(num1, num2) {
    let restante = num1 - num2;
    return restante;
}
function multiply(num1, num2) {
    let producto = num1 * num2;
    return producto;
}
function divide(num1, num2) {
    let dividendo = num1 / num2;
    return dividendo;
}

let operator = prompt("Give me your operator; ");

function whichOperator (operator) {
    const MULTIPICATION = '*';
    const ADDITION = '+';
    const DIVISION = '/';
    const SUBSTRACTION = '-';
}

if (operator == MULTIPICATION ) {
    let result1 = num1 * num2;
    return result1; 
}

if else (operator == ADDITION ) {
    let result2 = num1 + num2;
    return result2; 
}
if else (operator == DIVISION ) {
    let result3 = num1 / num2;
    return result3; 
}
if else (operator == SUBSTRACTION ) {
    let result4 = num1 - num2;
    return result4; 
}