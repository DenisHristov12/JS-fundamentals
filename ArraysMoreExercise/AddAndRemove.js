function addRemove(arr) {
    let currNum = 1;
    let numArr = [];
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'add'){
            numArr.push(currNum);
        }else{
            numArr.pop(currNum);
        }
        currNum++;
    }

    result = numArr.join(" ");

    if (result === ""){
        return "Empty";
    }else{
        return result;
    }
}

console.log(addRemove(['remove', 'remove', 'remove']));