function rotate(arr, rotations) {
    let buffArr = [];
    for (let i = 0; i <= rotations - 1; i++) {
        let firstEl = arr[0];
        for (let j = 1; j < arr.length; j++) {
            buffArr.push(arr[j]);
        }
        buffArr.push(firstEl);
        arr = buffArr;
        buffArr = [];
        //arr.push(firstEl);
        //arr.shift(arr[i]);
    }

    console.log(arr.join(" "));
}

rotate([51, 47, 32, 61, 21], 2);