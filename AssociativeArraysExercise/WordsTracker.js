function count(arr) {
    let wordsToSearch = arr.shift().split(" ");
    let wordsCount = {};

    let count = 0;

    for (let i = 0; i < wordsToSearch.length; i++) {
        let currentWord = wordsToSearch[i];
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
        console.log(`${key} - ${value}`);
    }
}

count([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);