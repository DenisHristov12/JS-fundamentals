function carWash(comandsArr) {
    let value = 0;

    for (let i = 0; i < comandsArr.length; i++) {
        switch (comandsArr[i]) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                value += value * (20/100);
                break;
            case 'vacuum cleaner':
                value += value * (25/100);
                break;
            case 'mud':
                value -= value * (10/100);
                break;
            default:
                break;
        }
    }

    return `The car is ${value.toFixed(2)}% clean.`;
}

console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])); 