function upperOrLower(ch) {
    if(ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90){
        console.log("upper-case");
    }else{
        console.log("lower-case");
    }
}

upperOrLower('L');