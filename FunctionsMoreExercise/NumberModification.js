function modificate(num) {
    let sum = 0;
    let average = 0;
    let digitsCount = 0;

    let result = '';
    let numToStr = num.toString();

    for (let i = 0; i < numToStr.length; i++) {
        sum += Number(numToStr[i]);
        result += numToStr[i];
        digitsCount++;
    }

    average = sum / digitsCount;

    if(average > 5){
        return result;
    }else{
        let buff = result;
        for (let i = numToStr.length - 1; i <= buff.length; i++) {
            result += '9';

            sum += Number(result[i + 1]);
            digitsCount++;

            average = sum / digitsCount;

            if(average > 5){
                return result;
            }

            buff = result;
        }
    }
}

console.log(modificate(5835)); 