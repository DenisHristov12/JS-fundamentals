function negativeOrPositive(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0){
            result.unshift(arr[i]);
        }else{
            result.push(arr[i]);
        }
    }

    return result.join("\n");
}

console.log(negativeOrPositive(['7', '-2', '8', '9']));
console.log(negativeOrPositive(['3', '-2', '0', '-1']));