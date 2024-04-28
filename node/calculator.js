
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    console.log("Cannot divide by zero");
    process.exit();
  } else {
    return x / y;
  }
}

const operations = {
  '+': add,
  '-': subtract,
  '/': divide,
  '*': multiply
};

readline.question('Enter the operation you want to perform (+,-,*,/): ', (operation) => {
  readline.question('Enter the first number: ', (num1) => {
    readline.question('Enter the second number: ', (num2) => {
      const chosenOperation = operations[operation];
      if (!chosenOperation) {
        console.log("Invalid operation");
        process.exit();
      } else {
        const result = chosenOperation(parseInt(num1), parseInt(num2));
        console.log(`Result: ${result}`);
        readline.close();
      }
    });
  });
});