function reveal(words, str) {
    let wordsToReveal = words.split(", ");
    let text = str.split(" ");

    for (let word of wordsToReveal) {
        for (let i = 0; i < text.length; i++) {
            if(text[i].includes("*") && text[i].length === word.length){
                text[i] = word;
            }
        }
    }
    

    console.log(text.join(" "));
}

reveal('great',
'softuni is ***** place for learning new programming languages'
);