function distinct(arr) {
    let uniqueArr = [];

    for (const el of arr) {
        if(uniqueArr.indexOf(el) === -1){
            uniqueArr.push(el);
        }
    }

    return uniqueArr.join(" ");
}

console.log(distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]));