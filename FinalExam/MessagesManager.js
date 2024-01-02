function manage(arr) {
    let capacity = Number(arr.shift());
    let records = {};

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split("=");
        let action = command[0];

        if(command === "Statistics"){
            break;
        }

        switch (action) {
            case "Add":
                let username = command[1];
                let sentNumber = Number(command[2]);
                let recievedNumber = Number(command[3]);

                if(!records.hasOwnProperty(username)){
                    records[username] = [sentNumber, recievedNumber];
                }else{
                    records[username][0] += sentNumber;
                    records[username][1] += recievedNumber;
                }

                if(Number(records[username][0]) + Number(records[username][1]) >= capacity){
                    delete records[username];
                    console.log(`${username} reached the capacity!`);
                }
                break;
            case "Message":
                let sender = command[1];
                let reciever = command[2];

                if(records.hasOwnProperty(sender) && records.hasOwnProperty(reciever)){
                    records[sender][0]++;
                    records[reciever][1]++;
                }else{
                    break;
                }

                if(Number(records[sender][0]) + Number(records[sender][1]) >= capacity){
                    delete records[sender];
                    console.log(`${sender} reached the capacity!`);
                }else if(Number(records[reciever][0]) + Number(records[reciever][1]) >= capacity){
                    delete records[reciever];
                    console.log(`${reciever} reached the capacity!`);
                }
                break;
            case "Empty":
                let name = command[1];
                let values = Object.keys(records);

                if(name === "All"){
                    for (let key of values) {
                        records[key][0] = 0;
                        records[key][1] = 0;
                    }
                }

                if(records.hasOwnProperty(name)){
                    records[name][0] = 0;
                    records[name][1] = 0;
                }
                break;
            default:
                break;
        }
    }

    let keys = Object.keys(records);
    let allMessages = 0;
    let usersCount = 0;

    for (let key of keys) {
        allMessages = Number(records[key][0]) + Number(records[key][1]);
        if(allMessages !== 0){
            usersCount++;            
        }
    }  

    console.log(`Users count: ${usersCount}`);

    for (let key of keys) {
        allMessages = Number(records[key][0]) + Number(records[key][1]);
        if(allMessages !== 0){
            console.log(`${key} - ${allMessages}`);
        }
    }  

}

manage((["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Message=Berg=Mark",
"Message=Mark=Kevin",
"Add=Berg=9=0",
"Statistics"])
);
console.log("\n");
manage((["20",
"Add=Mark=3=9",
"Add=Berry=5=5",
"Add=Clark=4=0",
"Empty=Berry",
"Add=Blake=9=3",
"Add=Michael=3=9",
"Add=Amy=9=9",
"Message=Blake=Amy",
"Message=Michael=Amy",
"Statistics"])
);
console.log("\n");
manage((["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Add=Bonnie=3=3",
"Message=Bonnie=Johny",
"Statistics"])
);