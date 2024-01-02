function calculate(startingYeild) {
    let dayCount = 0;
    let workersConsume = 26;
    let spiceExtracted = 0;
    
    while(startingYeild >= 100){
        spiceExtracted += startingYeild - workersConsume;
        startingYeild -= 10;
        dayCount ++;
    }

    if(startingYeild < 100){
        spiceExtracted -= workersConsume;
        if(spiceExtracted <= 0){
            spiceExtracted = 0;
        }
        console.log(dayCount);
        console.log(spiceExtracted);
    }else{
        console.log(dayCount);
        console.log(spiceExtracted);
    }
    
}

calculate(80);