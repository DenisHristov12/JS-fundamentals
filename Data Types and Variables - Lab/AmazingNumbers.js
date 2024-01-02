function checkAmazing(num) {
    let sum = 0;

    let numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
    }

    if(sum.toString().includes(9)){
        console.log(`${num} Amazing? True`);
    }else{
        console.log(`${num} Amazing? False`);
    }
}

checkAmazing(5);