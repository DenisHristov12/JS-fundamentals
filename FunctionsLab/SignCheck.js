function check(numOne, numTwo, numThree) {
    let numOneToStr = numOne.toString();
    let numTwoToStr = numTwo.toString();
    let numThreeToStr = numThree.toString();

    let negativeNums = 0;
    
    if(numOneToStr.includes("-")){
        negativeNums++;
    }
    if(numTwoToStr.includes("-")){
        negativeNums++;
    } 
    if(numThreeToStr.includes("-")){
        negativeNums++;
    }

    if(negativeNums % 2 === 0){
        return "Positive";
    }else{
        return "Negative";
    }
}

console.log(check(5, -12, -15));