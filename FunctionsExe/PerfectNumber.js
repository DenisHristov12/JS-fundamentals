function checkPerfect(num) {
    let sum = 0;
    
    for (let i = 1; i < num; i++) {
        if(num % i === 0){
            sum += i;
        }
    }

    if(sum === num){
        return "We have a perfect number!";
    }else{
        return "It's not so perfect.";
    }
}

console.log(checkPerfect(6)); 
console.log('------------');
console.log(checkPerfect(28)); 
console.log('------------');
console.log(checkPerfect(1236498)); 
