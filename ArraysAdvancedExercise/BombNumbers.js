function bombNums(numSequence, specialBombNum) {
    let sum = 0;

    let left;
    let right;

    let bombNum = specialBombNum[0];
    let countRemoveNums = specialBombNum[1];

    for (let i = 0; i < numSequence.length; i++) {
        if(numSequence[i] === bombNum){
            left = numSequence.slice(0, i);
            right = numSequence.slice(i + 1, numSequence.length);
            break;
        }
    }

    left = left.slice(0, left.length - countRemoveNums);
    right = right.slice(countRemoveNums, right.length);

    for (let i = 0; i < left.length; i++) {
        if(left[i] === bombNum){
            bombNums(left, specialBombNum);
            sum += left[i];
        }else{
            sum += left[i];
        }
    }

    for (let i = 0; i < right.length; i++) {
        if(right[i] === bombNum){
            bombNums(right, specialBombNum);
            sum += right[i];
        }else{
            sum += right[i];
        }
    }

    return sum;
}

console.log(bombNums([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log("--------------");
console.log(bombNums([1, 4, 4, 2, 8, 9, 1],[9, 3]));
console.log("--------------");
console.log(bombNums([1, 7, 7, 1, 2, 3],[7, 1]));
console.log("--------------");
console.log(bombNums([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],[2, 1]));