function match(numbersArr) {
    let regex = /\+359([ -])2\1\d{3}\1\d{4}\b/g;
    let result = [];

    for (let i = 0; i < numbersArr.length; i++) {
        let match = numbersArr[i].match(regex);

        //result.push(match);
        result = result.concat(match);
    }

    console.log(result.join(", "));
}

match(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);