function solve(arr) {
    let currBiggestNum = arr[0];
    let newArr = [currBiggestNum];
    let result = '';

    for (let i = 1; i < arr.length; i++) {
        let nextNum = arr[i];

        if(nextNum >= currBiggestNum){
            currBiggestNum = nextNum;
            newArr.push(currBiggestNum);
        }
    }

    result = newArr.join(" ");

    return result;
}

console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24])); 