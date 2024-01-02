function replaceChars(str) {
    let charsArray = str.split('');
    let outPutArr = [];

    outPutArr.push(charsArray[0]);

    let outPutStr = outPutArr.join('');    
 
    for (let i = 1; i < charsArray.length; i++) {
        if (charsArray[i - 1] !== charsArray [i]){
            outPutArr.push(charsArray[i]);
            outPutStr = outPutStr.concat(charsArray[i]);
        }
    }

    console.log(outPutStr);
}

replaceChars('aaaaabbbbbcdddeeeedssaa');