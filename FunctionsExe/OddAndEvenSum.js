function oddEvenSum(num) {
    let numToStr = num.toString();
    let result = ``;

    function oddSum(numToStr) {
        let sum = 0;

        for (let i = 0; i < numToStr.length; i++) {
            let digit = Number(numToStr[i]);

            if(digit % 2 === 1){
                sum += digit;
            }
        }

        return sum;
    }

    function evenSum(numToStr) {
        let sum = 0;

        for (let i = 0; i < numToStr.length; i++) {
            let digit = Number(numToStr[i]);


            if(digit % 2 === 0){
                sum += digit;
            }
        }

        return sum;
    }


    result += `Odd sum = ${oddSum(numToStr)}, Even sum = ${evenSum(numToStr)}`;

    return result;
}

console.log(oddEvenSum(1000435));