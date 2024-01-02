function calculateFactorialDivision(num1, num2) {
    let division = 0;
    
    function calculateFactorial(num) {
        let result = 1;

        for (let i = num; i >= 1; i--) {
            result *= i;
        }

        return result;
    }

    division = (calculateFactorial(num1) / calculateFactorial(num2)).toFixed(2);

    return division;
}

console.log(calculateFactorialDivision(5, 2)); 