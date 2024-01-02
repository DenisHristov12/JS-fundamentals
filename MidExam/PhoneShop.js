function shop(arr) {
    let listOfPhones = arr.shift().split(", ");

    let i = 0;
    let command = arr[i];

    while(command !== "End"){
        let newCommand = command.split(" - ");

        switch (newCommand[0]) {
            case "Add":
                let phone = newCommand[1];
                if(!listOfPhones.includes(phone)){
                    listOfPhones.push(phone);
                }
                break;
            case "Remove":
                let phone1 = newCommand[1];
                let index = listOfPhones.indexOf(newCommand[1]);

                if(listOfPhones.includes(phone1)){
                    listOfPhones.splice(index, 1);
                }
                break;
            case "Bonus phone":
                let splitNewPhone = newCommand[1].split(":");
                let oldPhone = splitNewPhone[0];
                let newPhone = splitNewPhone[1];
                let index1 = listOfPhones.indexOf(splitNewPhone[0]);

                if(listOfPhones.includes(oldPhone)){
                    listOfPhones.splice(index1 + 1, 0, newPhone);
                }
                break;
            case "Last":
                let phone2 = newCommand[1];
                let index2 = listOfPhones.indexOf(newCommand[1]);

                if(listOfPhones.includes(phone2)){
                    listOfPhones.splice(index2, 1);
                    listOfPhones.push(phone2);
                }
                break;
            default:
                break;
        }

        i++;
        command = arr[i];
    }

    console.log(listOfPhones.join(", "));
}

shop((["SamsungA50, MotorolaG5, IphoneSE","Add - Iphone10","Remove - IphoneSE","End"]));

console.log("------------------");

shop((["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"])

);