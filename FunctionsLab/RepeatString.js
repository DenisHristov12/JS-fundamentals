function repeat(str, repeatCount){
    let result = '';
    
    for (let i = 0; i < repeatCount; i++) {
        result += str;
    }

    return result;
}

console.log(repeat("Denis", 5));