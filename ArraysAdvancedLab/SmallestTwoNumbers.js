function smallestTwoNums(arr) {
    let result = [];
    let smallestNum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < 2; i++) {
        let smallestNumIndex;
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] < smallestNum){
                smallestNum = arr[j];
                smallestNumIndex = j;
            }
            
        }
        result.push(smallestNum);
        arr.splice(smallestNumIndex, 1);
        
        smallestNum = Number.MAX_SAFE_INTEGER;
    }

    return result.join(" ");
}

console.log(smallestTwoNums([30, 15, 50, 5]));
console.log('---------------');
console.log(smallestTwoNums([3, 0, 10, 4, 7, 3]));