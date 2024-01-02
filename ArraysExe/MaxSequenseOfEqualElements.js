function maxSequense(arr) {
    let longestSequence = [];

    for(let i = 0; i < arr.length; i++){
        let currentSequence = [];
        currentSequence.push(arr[i]);

        for(let j = i + 1; j < arr.length; j++){
            if((arr[i]) === (arr[j])){
                currentSequence.push(arr[j]);
            }else{
                break;
            }           
        }

        if(currentSequence.length > longestSequence.length){
            longestSequence = currentSequence;
        }
    }

    console.log(longestSequence.join(" "));
}

maxSequense([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);