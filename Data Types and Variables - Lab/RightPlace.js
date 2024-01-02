function findTheRightPlace(str1, ch, str2) {
    let text = [];
    let backToText = "";
    
    for (let i = 0; i < str1.length; i++) {
        text.push(str1[i]);
    }

    for (let i = 0; i < text.length; i++) {
        if(text[i] === "_"){
            text[i] = ch;
        }

        backToText += text[i];
    }

    if(backToText === str2){
        console.log("Matched");
    }else{
        console.log("Not Matched");
    }

}

findTheRightPlace("str_ng","i","strong");

