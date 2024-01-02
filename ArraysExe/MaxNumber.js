function maxNum(arr) {
    let newArr = [];
    let isMax = false;
    for (let i = 0; i < arr.length; i++) {
        let max = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            if(max > arr[j]){
                isMax = true;
            }else{
                isMax = false;
                break;
            }
            
        }
        if(max === arr[arr.length - 1]){
            isMax = true;
            if(max === arr[i + 1]){
                isMax = false;
            }
        }

        if(isMax === true){
            newArr.push(max);
        }
    }

    console.log(newArr.join(" "));
}

maxNum([14,
    24,
    3,
    19,
    15,
    17,
17]);