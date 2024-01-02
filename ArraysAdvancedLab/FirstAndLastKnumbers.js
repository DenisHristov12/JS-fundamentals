function printElements(arr) {
    let k = arr.shift();
    let result = '';

    let part1 = arr.slice(0, k);
    let part2 = arr.slice(arr.length - k, arr.length);

    result = part1.join(" ") + "\n" + part2.join(" ");

    //console.log(part1.join(" "));
    //console.log(part2.join(" "));

    /*
    for (let i = 0; i < k; i++) {
        result += arr[i];
    }

    result += '\n';

    for (let i = arr.length - k; i < arr.length; i++) {
        result += arr[i];
    }
    */

    return result;
}

console.log(printElements([2, 7, 8, 9]));
console.log('----------------------------');
console.log(printElements([3, 6, 7, 8, 9])); 