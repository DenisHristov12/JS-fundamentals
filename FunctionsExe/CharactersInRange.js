function charactersInRange(ch1, ch2) {
    let firstCharacter;
    let lastCharacter;

    if(ch1.charCodeAt(0) > ch2.charCodeAt(0)){
        firstCharacter = ch2.charCodeAt(0);
        lastCharacter = ch1.charCodeAt(0);
    }else{
        firstCharacter = ch1.charCodeAt(0);
        lastCharacter = ch2.charCodeAt(0);
    }

    let result = '';

    for (let i = firstCharacter; i < lastCharacter - 1; i++) {
        let char = String.fromCharCode(i + 1);

        result += char + " ";
    }

    return result;
}

console.log(charactersInRange('C',
'#'
));