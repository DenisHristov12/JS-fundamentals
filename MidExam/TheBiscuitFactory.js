function factory(arr) {
    let biscuitsPerDay = arr[0];
    let workersCount = arr[1];
    let biscuitsFor30daysOnAnotherFactory = arr[2];

    let sum = 0;
    let diff = 0;
    let diffPercent = 0;

    for (let i = 1; i <= 30; i++) {
        if(i % 3 === 0){
            sum += Math.floor((biscuitsPerDay * workersCount) * (75/100));
        }else{
            sum += biscuitsPerDay * workersCount;
        }
    }

    console.log(`You have produced ${sum} biscuits for the past month.`);

    
    if(sum > biscuitsFor30daysOnAnotherFactory){
        diff = sum - biscuitsFor30daysOnAnotherFactory;
        diffPercent = (diff/biscuitsFor30daysOnAnotherFactory) * 100;
        console.log(`You produce ${diffPercent.toFixed(2)} percent more biscuits.`);
    }else{
        diff = biscuitsFor30daysOnAnotherFactory - sum;
        diffPercent = (diff/biscuitsFor30daysOnAnotherFactory) * 100;
        console.log(`You produce ${diffPercent.toFixed(2)} percent less biscuits.`);
    }
}

factory((["78",
"8",
"16000"])
);
console.log();
factory((["65",
"12",
"26000"])
);
console.log();
factory((["163",
"16",
"67020"])

);