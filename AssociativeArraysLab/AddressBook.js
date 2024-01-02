function book(arr) {
    let adressBook = {};

    for (const el of arr) {
        let [name, adress] = el.split(":");

        adressBook[name] = adress;
    }

    let keys = Object.keys(adressBook).sort((keyA, keyB) => keyA.localeCompare(keyB));

    for (const key of keys) {
        console.log(`${key} -> ${adressBook[key]}`);
    }
}

book(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
);