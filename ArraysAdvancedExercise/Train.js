function train(arr) {
    let wagons = arr.shift().split(" ").map(a => Number(a));

    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");

        if(command[0] === "Add"){
            wagons.push(Number(command[1]));
        }else{
            for (let i = 0; i < wagons.length; i++) {
                let currEl = wagons[i];
                if(Number(command[0]) <= (maxCapacity - currEl)){
                    wagons[i] += Number(command[0]);
                    break;
                }
            }
        }
    }
    return wagons.join(" ");
}

console.log(train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
));

console.log('----------------');

console.log(train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
));