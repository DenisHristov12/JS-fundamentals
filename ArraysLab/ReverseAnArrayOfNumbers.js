function reverse(n, arr) {
    let newArr = [];
    let result = ``;

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }

    for (let i = newArr.length - 1; i >= 0; i--) {
        result += `${newArr[i]} `;
    }

    console.log(result);
}

reverse(3, [10, 20, 30, 40, 50]);