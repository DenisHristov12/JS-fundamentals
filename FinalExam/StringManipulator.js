function manipulate(arr) {
    let text = arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");
        let action = command[0];

        if(command === "End"){
            break;
        }

        switch (action) {
            case "Translate":
                let letter = command[1];
                let replacement = command[2];

                while (text.includes(letter)) {
                    text = text.replace(letter, replacement);
                }

                console.log(text);
                break;
            case "Includes":
                let subStr = command[1];

                if(text.includes(subStr)){
                    console.log("True");
                }else{
                    console.log("False");
                }
                break;
            case "Start":
                let start = command[1];
                let length = start.length;

                let textStart = text.substring(0, length);

                if(start === textStart){
                    console.log("True");
                }else{
                    console.log("False");
                }
                break;
            case "Lowercase":
                text = text.toLowerCase();

                console.log(text);
                break;
            case "FindIndex":
                let letterToFind = command[1];
                console.log(text.lastIndexOf(letterToFind));
                break;
            case "Remove":
                let startIndex = Number(command[1]);
                let count = Number(command[2]);

                let removeStr = text.substring(startIndex, startIndex + count);

                text = text.replace(removeStr, "");

                console.log(text);
                break;
            default:
                break;
        }
    }
}

manipulate((["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])
);

manipulate((["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])
);