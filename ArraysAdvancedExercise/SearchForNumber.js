function search(arr1, arr2) {
    let numOfElementsTake = arr2[0];
    let numOfElementsDelete = arr2[1];
    let searchNum = arr2[2];

    let count = 0;

    let newArr = arr1.slice(0, numOfElementsTake);
    newArr.splice(0, numOfElementsDelete);

    for (let i = 0; i < newArr.length; i++) {
        if(newArr[i] === searchNum){
            count++;
        }
    }

    return `Number ${searchNum} occurs ${count} times.`;
}

console.log(search([5, 2, 3, 4, 1, 6],[5, 2, 3])); 
console.log("-----------------");
console.log(search([7, 1, 5, 8, 2, 7],[3, 1, 5])); 