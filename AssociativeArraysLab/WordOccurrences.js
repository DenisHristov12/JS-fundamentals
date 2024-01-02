function countWords(arr) {
    let wordsCount = {};

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentWord = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if(currentWord === arr[j]){
                count++;
            }
            wordsCount[currentWord] = count;
        }
        count = 0;
    }

    let keysValues = Object.entries(wordsCount).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    for (const [key, value] of keysValues) {
        console.log(`${key} -> ${value} times`);
    }
}

countWords(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);