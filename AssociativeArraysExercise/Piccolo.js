function parking(arr){
    let parkingSlots = new Set();

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(", ");

        if(command[0] === "IN"){
            parkingSlots.add(command[1]);
        }else{
            parkingSlots.delete(command[1]);
        }
    }

    let sortedArr = Array.from(parkingSlots).sort((a, b) => a.localeCompare(b));

    if(parkingSlots.size === 0){
        console.log("Parking Lot is Empty");
    }else{
        for (const key of sortedArr) {
            console.log(key);
        }
    }
}

parking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);