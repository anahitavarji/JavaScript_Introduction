// VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"

// var num1 = (prompt ('Enter First Number:'))

// var operator = prompt ('Enter the multiplication sign "*" ')

// var num2 = (prompt ('Enter Second Number:'))

// var result = num1 * num2

// console.log (`${num1} ${operator} ${num2} = ${result}`)

let num1 = parseFloat (prompt ("Enter first number"));

let operator = prompt ("Enter an operator: +, -, *, or /");

let num2 = parseFloat (prompt ( "Enter second number"));

if (operator == '+') { 
    result = num1 + num2;

}
else if (operator == "-") {
    result = num1 - num2;
}
else if (operator == "*") {
    result = num1 * num2;
}
else {
    result = num1 / num2;
}

console.log(`${num1} ${operator} ${num2} = ${result}`)