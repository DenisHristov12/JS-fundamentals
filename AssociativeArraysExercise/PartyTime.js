function party(arr) {
    /*
    let guests = new Set();

    let i = 0;
    let command = arr[i];

    while(command !== "PARTY"){
        guests.add(command);
        arr.shift();

        command = arr[i];
    }

    for (let i = 1; i < arr.length; i++) {
        for (const el of Array.from(guests)) {
            if(el === arr[i]){
                guests.delete(el);
            }
        }
    }

    let sorted = Array.from(guests).sort((a, b) => Number(a[0]) - Number(b[0]));
    console.log(guests.size);

    for (const el of sorted) {
        console.log(el);
    }
    */

    let guests = {
        vip: [],
        regular: []
    };

    let index = arr.indexOf("PARTY");
    let guestList = arr.slice(0, index);

    for (let guest of guestList) {
        if (guest[0] >= 0 && guest[0] <= 9) {
            guests.vip.push(guest);
        } else {
            guests.regular.push(guest);
        }
    }

    arr.splice(0, index + 1);

    for (let guest of arr) {
        if (guests.vip.includes(guest)) {
            let index = guests.vip.indexOf(guest);
            guests.vip.splice(index, 1);
        } else if (guests.regular.includes(guest)) {
            let index = guests.regular.indexOf(guest);
            guests.regular.splice(index, 1);
        }
    }

    console.log(guests.regular.length + guests.vip.length);

    if (guests.vip.length > 0) {
        console.log(guests.vip.join("\n"));
    }

    if (guests.regular.length > 0) {
        console.log(guests.regular.join("\n"));
    }
}

party(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);

console.log("---------------");

party(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]
);