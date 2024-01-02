function employeeList(arr) {
    let person = {};

    for (let name of arr) {
        person[name] = name.length;
    }

    for (const key of Object.keys(person)) {
        console.log(`Name: ${key} -- Personal Number: ${person[key]}`);
    }
}

employeeList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );