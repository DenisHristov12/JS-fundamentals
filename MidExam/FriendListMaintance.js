function friendList(arr) {
    let friends = arr.shift().split(", ");
    let blackListedCount = 0;
    let lostNamesCount = 0;

    let i = 0;
    let command = arr[i];

    while(command !== "Report"){
        let newCommand = command.split(" ");

        switch (newCommand[0]) {
            case "Blacklist":
                let blackListIndex = friends.indexOf(newCommand[1]);
                if(friends.includes(newCommand[1])){
                    console.log(`${newCommand[1]} was blacklisted.`);
                    blackListedCount++;
                    friends[blackListIndex] = "Blacklisted";
                }else{
                    console.log(`${newCommand[1]} was not found.`);
                }
                break;
            case "Error":
                let index = Number(newCommand[1]);
                let name = friends[index];

                if(index >= 0 && index < friends.length){
                    if(name !== "Blacklisted" && name !== "Lost"){
                        console.log(`${friends[index]} was lost due to an error.`);
                        lostNamesCount++;
                        friends[index] = "Lost";
                    }
                }
                break;
            case "Change":
                let index1 = Number(newCommand[1]);
                let name1 = friends[index1];
                let newName = newCommand[2];

                if(index1 >= 0 && index1 < friends.length){
                    console.log(`${friends[index1]} changed his username to ${newName}.`);
                    friends[index1] = newName;
                }
                break;
            default:
                break;
        }

        i++;
        command = arr[i];
    }

    console.log(`Blacklisted names: ${blackListedCount}`);
    console.log(`Lost names: ${lostNamesCount}`);
    console.log(friends.join(" ")); 
}

friendList((["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"])
);
console.log("---------------------");
friendList((["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])

);