function power(num, power) {
    //return Math.pow(num, power);
    //console.log(Math.pow(num, power));

    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= num;
    }

    console.log(result);
}

power(2, 8);