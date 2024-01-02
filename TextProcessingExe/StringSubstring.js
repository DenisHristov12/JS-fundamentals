function textSubStr(word, text) {
    let textArr = text.split(" ");

    for (let el of textArr) {
        if(el.toLowerCase() === word.toLowerCase()){
            console.log(el.toLowerCase());
            return;
        }
    }

    console.log(`${word} not found!`);
}

textSubStr('python',
'JavaScript is the best programming language'
);