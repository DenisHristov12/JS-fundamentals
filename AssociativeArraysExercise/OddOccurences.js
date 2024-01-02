function oddCount(str) {
    let count = 0;
    let result = new Map();
    let printResult = '';

    let wordsArr = str.split(" ");

    for (let i = 0; i < wordsArr.length; i++) {
        let currWord = wordsArr[i];
        for (let j = 0; j < wordsArr.length; j++) {
            if(currWord.toLowerCase() === wordsArr[j].toLowerCase()){
                count++;
            }
        }
        if(count % 2 === 1){
            if(!result.has(currWord.toLowerCase())){
                result.set(currWord.toLowerCase(), 0);
            }
        }
        count = 0;
    }

    for (const [key, value] of Array.from(result)) {
        printResult += key.toLowerCase() + " ";
        
    }
    
    console.log(printResult);
}

oddCount('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');