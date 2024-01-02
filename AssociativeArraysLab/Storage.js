function storage(arr) {
    let map = new Map();

    for (const el of arr) {
        let [type, quantity] = el.split(" ");

        if(map.has(type)){
            let value = map.get(type);
            
            map.set(type, Number(quantity) + Number(value));
        }else{
            map.set(type, quantity);
        }
    }

    let entries = map.entries();

    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);