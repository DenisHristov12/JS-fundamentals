function company(arr) {
    let company = {};

    for (const employee of arr) {
        let [name, id] = employee.split(" -> ");

        if(!company.hasOwnProperty(name)){
            company[name] = new Set().add(id);
        }else{
            company[name].add(id);
        }
    }

    let sortedArr = Object.keys(company).sort((keyA, keyB) => keyA.localeCompare(keyB));

    for (const key of sortedArr) {
        console.log(key);
            
        let setValues = company[key].values();

        for (const value of setValues) {
            console.log(`-- ${value}`);
        }
    }
    
}

company([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    );