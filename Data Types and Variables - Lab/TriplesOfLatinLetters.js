function triplesOfLetters(n) {
    for (let i = 0; i < Number(n); i++) {
        for (let j = 0; j < Number(n); j++) {
            for (let k = 0; k < Number(n); k++) {
                let letter1 = String.fromCharCode('a'.charCodeAt(0) + i);
                let letter2 = String.fromCharCode('a'.charCodeAt(0) + j);
                let letter3 = String.fromCharCode('a'.charCodeAt(0) + k);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

triplesOfLetters('3');