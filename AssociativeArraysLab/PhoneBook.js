function phoneBook(arr) {
    let phBook = {};

    arr.forEach(el => {
        let tokens = el.split(" ");
        let name = tokens[0];
        let phoneNumber = tokens[1];

        phBook[name] = phoneNumber;
    });

    for (const key in phBook) {
        console.log(`${key} -> ${phBook[key]}`);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);