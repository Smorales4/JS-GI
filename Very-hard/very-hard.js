const num1 = prompt("Give me your first number:");
const num2 = prompt("Give me your second number:");

const operator = prompt('Enter operator ( either +, -, * or / ): ');

let result;

if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-' ) {
    result = num1 - num2;
}
else if (operator == '*' ) {
    result = num1 * num2;
} 
else {
    result = num1 / num2;
}
console.log(`${num1} ${operator} ${num2} = ${result}`);