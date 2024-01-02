function findNumbers(str) {
    let arr = str.split(" ").map(x => Number(x));
    let result = [];

    let sum = 0;
    let average = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    average = sum/arr.length;

    let filteredArr = arr.filter(x => x > average).sort((a, b) => b - a);

    if(filteredArr.length === 0){
        return "No";
    }
    
    for (let i = 0; i < filteredArr.length; i++) {
        result.push(filteredArr[i]);
        if(i === 4){
            break;
        }
    }

    return result.join(" ");
}

console.log(findNumbers('10 20 30 40 50'));
console.log(findNumbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'));
console.log(findNumbers('1'));