function sort(arr) {
    arr.sort((a, b) => a - b);

    let sortedArr = [];

    while(arr.length !== 0){
        sortedArr.push(arr.pop());
        sortedArr.push(arr.shift());
    }

    retuen(sortedArr.join(" "));
}

console.log(sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));