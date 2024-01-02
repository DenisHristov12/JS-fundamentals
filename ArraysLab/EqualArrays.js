function areEqual(arr1, arr2) {
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        if(Number(arr1[i]) === Number(arr2[i])){
            sum += Number(arr1[i]);
        }else{
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

areEqual(['10','2','30'], ['10','20','30']);