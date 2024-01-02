function calc(arr) {
    let regex = />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>[0-9]+)/;
    let price = 0;

    let i = 0;
    let match = regex.test(arr[i]);
    let command = arr[i];

    console.log("Bought furniture:");

    while(command !== 'Purchase'){
        if(match === true){
            let line = regex.exec(arr[i]);
            price += Number(line.groups.price) * Number(line.groups.quantity);
            console.log(`${line.groups.furniture}`);
        }

        i++;
        match = regex.test(arr[i]);
        command = arr[i];
    }

    console.log(`Total money spend: ${price.toFixed(2)}`);
}

calc(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
);
console.log('-----------------');
calc(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']

);
console.log('-----------------');
calc(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
);


