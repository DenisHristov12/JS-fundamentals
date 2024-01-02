function calculate(num, precision) {
    if(precision > 15){
        precision = 15;
    }

    console.log(parseFloat(num.toFixed(precision)));
}

calculate(3.3, 3);