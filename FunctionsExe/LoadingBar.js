function loadingBar(num) {
    let result = `[`;
    let numPercent = num / 10;
    for (let j = 1; j <= numPercent; j++) {
        result += `%`;
    }

    let numDots = (100 - num) / 10;
    for (let j = 1; j <= numDots; j++) {
        result += `.`;
    }

    result += `]`;

    

    if(num < 100){
        console.log(`${num}% ${result}`);
        console.log("Still loading...");
    }else{
        console.log("100% Complete!");
        console.log(result);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);