function sort(n1, n2, n3) {
    let arr = [n1, n2, n3];

    arr.sort();

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

sort(2, 1, 3);