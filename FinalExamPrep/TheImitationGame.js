function game(arr) {
    let message = arr.shift();

    for (let line of arr) {
        if(line === "Decode"){
            break;
        }

        let commands = line.split("|");
        let instruction = commands[0];

        switch (instruction) {
            case "Move":
                let lettersNum = Number(commands[1]);

                let lettersToMove = message.substring(0, lettersNum);
                message = message.replace(lettersToMove, "");
                message = message + lettersToMove;
                break;
            case "Insert":
                let index = Number(commands[1]);
                let value = commands[2];

                let leftPart = message.substring(0, index);
                let rightPart = message.substring(index);

                let newMsg = leftPart + value + rightPart;
                message = newMsg;
                break;
            case "ChangeAll":
                let subStr = commands[1];
                let replacement = commands[2];

                while(message.includes(subStr)){
                    message = message.replace(subStr, replacement);
                }

                break;
            default:
                break;
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

game(['zzHe','ChangeAll|z|l',  'Insert|2|o','Move|3','Decode']);
game(['owyouh','Move|2','Move|3','Insert|3|are', 'Insert|9|?', 'Decode' ]);