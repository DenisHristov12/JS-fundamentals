function pascCaseSplit(str) {
    let result = [];

    let startIndex = 0;

    for (let i = 1; i < str.length; i++) {
        let ch = str[i];

        if(ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90){
            result.push(str.substring(startIndex, i));
            startIndex = i;
        }
    }

    result.push(str.substring(startIndex));

    console.log(result.join(", "));
}

pascCaseSplit('Split');