function oddSum(n) {
    let counter = 0;
    let sum = 0;

    for (let i = 0; i < 100; i++) {
        if(i % 2 === 1){
            console.log(i);
            sum += i;
            counter++;
        }
        if(counter === n){
            console.log(`Sum: ${sum}`);
            return;
        }
    }
}

oddSum(5);