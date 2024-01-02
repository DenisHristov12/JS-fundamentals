function matrix(num) {
    let resultCol = '';

    for (let row = 1; row <= num; row++) {
        for (let col = 1; col <= num; col++) {
            let currNum = num;
            resultCol += currNum + ' ';
        }
        console.log(resultCol);
        resultCol = '';
    }
}

matrix(3);
console.log('---------------------');
matrix(7);
console.log('---------------------');
matrix(2);
