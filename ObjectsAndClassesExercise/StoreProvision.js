function provision(arr1, arr2) {
    let obj = {};
    
    for (let i = 0; i < arr1.length; i+=2) {
        obj[arr1[i]] = Number(arr1[i + 1]);
        
    }

    for (let i = 0; i < arr2.length; i+=2) {
        if(obj.hasOwnProperty(arr2[i])){
            obj[arr2[i]] += Number(arr2[i + 1]);
        }else{
            obj[arr2[i]] = Number(arr2[i + 1]);  
        }
    }


    for (const key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
    
}

provision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);