function calculate(arr) {
    let sumArr = 0;
    let sumNewArr = 0;
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        sumArr += currNum;

        if(currNum % 2 === 0){
            currNum += i;
            arr[i] = currNum;
            sumNewArr += currNum;
        }else{
            currNum -= i;
            arr[i] = currNum;
            sumNewArr += currNum;
        }
    }
    console.log(arr);
    console.log(sumArr);
    console.log(sumNewArr);
}

calculate([5, 15, 23, 56, 35]);