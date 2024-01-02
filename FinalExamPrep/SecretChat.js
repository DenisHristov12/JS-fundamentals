function secretChat(arr) {
    let secretMessage = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(":|:");
        let command = tokens[0];
        let values = tokens.slice(1);

        switch (command) {
            case "ChangeAll": {
                let subStr = values[0];
                let replacement = values[1];

                while(secretMessage.includes(subStr)){
                    secretMessage = secretMessage.replace(subStr, replacement);
                }

                console.log(secretMessage);
                break;
            }
            case "Reverse": {
                let subStr = values[0];
                if(secretMessage.includes(subStr)){
                    secretMessage = secretMessage.replace(subStr, "");
                    let reversed = reverseStr(subStr);
                    secretMessage += reversed;
                    console.log(secretMessage);
                }else{
                    console.log("error");
                }
                break;
            }
            case "InsertSpace":
                let index = values[0];
                let left = secretMessage.substring(0, index);
                let right = secretMessage.substring(index);
                secretMessage = left + " " + right;
                console.log(secretMessage);
                break;
            case "Reveal":
                console.log(`You have a new text message: ${secretMessage}`);
                return;
        }
    }

    function reverseStr(text) {
        return text.split("").reverse().join("");
    }
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);