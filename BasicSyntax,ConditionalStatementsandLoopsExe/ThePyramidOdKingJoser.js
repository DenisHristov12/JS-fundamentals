function calculateResources(base, increment) {
    let neededStone = 0;
    let neededMarble = 0;
    let neededLapis = 0;
    let neededGold = 0;

    let area = 0;

    let step = 0;

    for (let i = base; i > 0; i-=2) {
        area = i * i;
        step++;
        if(i === 1 || i === 2){
            neededGold += Math.ceil(i * increment);
        }
        if(step % 5 === 0){
            neededStone += ((i - 2) * (i - 2)) * increment;
            neededLapis += (area - ((i - 2) * (i - 2))) * increment;
        }else{
            neededStone += ((i - 2) * (i - 2)) * increment;
            neededMarble += (area - ((i - 2) * (i - 2))) * increment;
        }
        
        
    }

    let height = Math.floor(step);

    console.log(`Stone required: ${Math.ceil(neededStone)}`);
    console.log(`Marble required: ${Math.ceil(neededMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(neededLapis)}`);
    console.log(`Gold required: ${neededGold}`);
    console.log(`Final pyramid height: ${height}`);
}

calculateResources(11, 1);