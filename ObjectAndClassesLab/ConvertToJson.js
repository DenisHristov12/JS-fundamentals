function convert(fName, lName, hairColor) {
    let obj = {
        name: fName,
        lastName: lName,
        hairColor: hairColor
    };

    let str = JSON.stringify(obj);

    return str;
}

console.log(convert('George', 'Jones', 'Brown')); 