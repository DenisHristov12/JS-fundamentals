function substr(str, startIndex, count) {
    let endIndex = startIndex + count;
    
    console.log(str.substring(startIndex, endIndex));
}

substr('ASentence', 1, 8);