function censore(sentence, word) {
    while(sentence.includes(word)){
        sentence = sentence.replace(word, '*'.repeat(word.length));
    }

    console.log(sentence);
}

censore('A small sentence with some words', 'small');