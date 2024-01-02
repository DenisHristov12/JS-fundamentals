function cutReverse(text) {
    let firstHalf = text.substring(0, text.length / 2);
    let secondHalf = text.substring(text.length / 2);

    let resultFH = [];
    let resultSH = [];

    for (let i = 0; i < firstHalf.length; i++) {
        let ch = firstHalf[i];
        resultFH.unshift(ch);
    }

    for (let i = 0; i < secondHalf.length; i++) {
        let ch = secondHalf[i];
        resultSH.unshift(ch);
    }

    console.log(resultFH.join(""));
    console.log(resultSH.join(""));
    
}

cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');