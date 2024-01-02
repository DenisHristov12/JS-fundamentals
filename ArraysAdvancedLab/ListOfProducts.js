function printProducts(arr) {
    let sortedProducts = arr.sort();
    let result = ``;

    for (let i = 0; i < arr.length; i++) {
        result += `${i + 1}.${arr[i]}\n`;
    }

    return result;
}

console.log(printProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']));