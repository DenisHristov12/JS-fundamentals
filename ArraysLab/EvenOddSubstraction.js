function evenOddSubstract(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    let diference = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
    
        if(currNum % 2 === 0){
            sumEven += currNum;
        }else{
            sumOdd += currNum;
        }
    }

    diference = sumEven - sumOdd;

    console.log(diference);
}

evenOddSubstract([1,2,3,4,5,6]);