function printElement(arr) {
    let result = [];
    let step = Number(arr[arr.length - 1]);
    for (let j = 0; j < arr.length - 1; j += step) {
        result.push(arr[j]);
    }

    console.log(result.join(" "));
}

printElement(['5', '20', '31', '4', '20', '2']);
printElement(['dsa', 'asd', 'test', 'test', '2']);