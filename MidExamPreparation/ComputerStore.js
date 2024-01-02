function store(arr) {
    let total = 0;
    let taxes = 0;
    let discount = 0;
    let receipt = ``;

    let isRegular = false;

    let i = 0;
    let command = arr[i];

    while(command !== 'special'){
        if(command === 'regular'){
            isRegular = true;
            break;
        }
        
        let num = Number(command);

        if(num < 0){
            console.log("Invalid price!");

            i++;
            command = arr[i];
            continue;
        }

        taxes += (num * (20/100));
        total += num;

        i++;
        command = arr[i];
    }

    if(total <= 0){
        console.log("Invalid order!");
        return;
    }

    discount = (total + taxes) * (10/100);
    
    if(isRegular === false){
        receipt = `Congratulations you've just bought a new computer!\nPrice without taxes: ${total.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${((total + taxes) - discount).toFixed(2)}$`;
    }else{
        receipt = `Congratulations you've just bought a new computer!\nPrice without taxes: ${total.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n-----------\nTotal price: ${(total + taxes).toFixed(2)}$`;
    }
    
    console.log(receipt);
}

store(['1050','200','450','2','18.50','16.86','special']);

store((['1023', '15', '-20','-5.50','450', '20', '17.66', '19.30', 'regular']));

store((['regular']));