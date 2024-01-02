function biggestNum(num1, num2, num3) {
    let arr = [num1, num2, num3];
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > biggest){
            biggest = arr[i];
        }
    }

    console.log(biggest);
}

biggestNum(1, 3, 2);