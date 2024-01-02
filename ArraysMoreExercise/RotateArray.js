function rotate(arr) {
    let rotations = Number(arr[arr.length - 1]);
    let reuslt = '';

    for (let i = 0; i < rotations; i++) {
        let lastElement = arr[arr.length - 2 - i];

        let buff = lastElement;
        delete arr[arr.length - 2 - i];
        arr.unshift(buff);

        if(i === rotations){
            break;
        }
    }

    arr.pop();
    reuslt = arr.join(" ");

    return reuslt;
}

console.log(rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']));