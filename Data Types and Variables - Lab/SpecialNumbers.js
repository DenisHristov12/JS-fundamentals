function checkSpecial(n) {
    let numToStr = "";
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
        numToStr += i;
        for (let j = 0; j < numToStr.length; j++) {
            sum += Number(numToStr[j]);
        }
       
        if(sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        } 
        numToStr = "";
        sum = 0;
    }
}

checkSpecial(15);