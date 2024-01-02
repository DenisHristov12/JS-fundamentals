function manipulate(arr) {
    let arrToManipulate = arr.shift().split(" ").map(Number);

    function addElement(num) {
        arrToManipulate.push(num);
    }
    function removeElement(num) {
        arrToManipulate = arrToManipulate.filter(el => el !== num);
    }
    function removeElementAtIndex(index) {
        arrToManipulate.splice(index, 1);
    }
    function insertElement(num, index) {
        arrToManipulate.splice(index, 0, num);
    }

    for (let i = 0; i < arr.length; i++) {
        let [command, firstNum, secondNum]= arr[i].split(" ");

        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case "Add":
                addElement(firstNum);
                break;
            case "Remove":
                removeElement(firstNum);
                break;
            case "RemoveAt":
                removeElementAtIndex(firstNum);
                break;
            case "Insert":
            insertElement(firstNum, secondNum);
                break;
            default:
                break;
        }
    }

    return arrToManipulate.join(" ");
}

console.log(manipulate(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']

));