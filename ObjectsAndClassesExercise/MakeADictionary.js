function dictionary(arr) {
    let myDictionary = {};
    
    for (const line of arr) {
        let obj = JSON.parse(line);
        let keys = Object.keys(obj);
        let key = keys[0];
        myDictionary[key] = obj[key];
    }

    let sortedKeys = Object.keys(myDictionary).sort((keyA, keyB) => keyA.localeCompare(keyB));

    for (const key of sortedKeys) {
        console.log(`Term: ${key} => Definition: ${myDictionary[key]}`);
    }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);