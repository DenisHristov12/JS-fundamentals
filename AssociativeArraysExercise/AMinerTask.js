function task(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i += 2) {
        if((i + 1) % 2 === 1 ){
            if(!result.hasOwnProperty(arr[i])){
                result[arr[i]] = Number(arr[i + 1]);
            }else{
                result[arr[i]] += Number(arr[i + 1]);
            }
        }
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}

task([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );