function findEqualSum(arr) {
    if (arr.length === 1) {
        console.log(0);
        return;
    }

    let invalidIndex = true;
     
    for (let i = 1; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
          leftSum += arr[j];
        }
        for (let l = i + 1; l < arr.length; l++) {
          rightSum += arr[l];
        }
        if (leftSum === rightSum) {
          console.log(i);
          invalidIndex = false;
        }
      }

    if (invalidIndex) {
    console.log("no");
    }
    
}

findEqualSum([1, 2, 3, 3]);