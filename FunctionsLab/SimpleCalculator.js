function simpleCalculator(numOne, numTwo, opeator) {
    let multiply = (numOne, numTwo) => numOne * numTwo;
 
    let divide = (numOne, numTwo) => numOne / numTwo;
        
    let add = (numOne, numTwo) => numOne + numTwo;

    let subtract = (numOne, numTwo) => numOne - numTwo;


    switch (opeator) {
        case "multiply":
            return multiply(numOne, numTwo);
        case "divide":
            return divide(numOne, numTwo);
        case "add":
            return add(numOne, numTwo);
        case "subtract":
            return subtract(numOne, numTwo);
        default:
            break;
    }
}
 
console.log(simpleCalculator(5, 5, 'add'));