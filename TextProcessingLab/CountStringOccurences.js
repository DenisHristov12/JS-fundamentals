function count(text, word) {
    let tokens = text.split(" ");
    let count = 0;
    
    for (const el of tokens) {
        if(el === word){
            count++;
        }
    }

    return count;
}

console.log(count("This is word and it also is a sentence", "is"));

