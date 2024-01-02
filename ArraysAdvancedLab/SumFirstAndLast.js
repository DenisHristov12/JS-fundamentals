function sum(arr) {
    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());

    let sum = firstEl + lastEl;

    return sum;
}

console.log(sum(['20', '30', '40'])); 