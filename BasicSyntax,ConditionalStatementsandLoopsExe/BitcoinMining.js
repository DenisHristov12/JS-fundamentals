function calculateBitcoins(input) {
    let goldPerGram = 67.51;
    let bitcoin = 11949.16;

    let sum = 0;
    let bitcoinCount = 0;
    let dayPurchased = 0;

    for (let i = 0; i < input.length - 1; i++) {
        if((i + 1) % 3 === 0){
            i -= i * (30/100);
            sum += Math.round((input[i]) * goldPerGram);
        }else{
            sum += Math.round((input[i]) * goldPerGram);
        }

        if(sum >= bitcoin){
            bitcoinCount ++;
            sum -= bitcoin;
            dayPurchased = i + 1;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinCount}`);
    console.log(`Day of the first purchased bitcoin: ${dayPurchased}`);
    console.log(`Left money: ${sum}`);

}

calculateBitcoins([100, 200, 300]);