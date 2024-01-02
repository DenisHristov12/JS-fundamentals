function solve(arr) {
    let health = 100;
    let coins = 0;
    let rooms = arr[0].split("|");
    let dead = false;
    let bestRoom = 0;

    for (let i = 0; i < rooms.length; i++) {
        let roomsContain = rooms[i].split(" ");

        switch (roomsContain[0]) {
            case "potion":
                if(health < 100){
                    let currHealth = health;
                    health += Number(roomsContain[1]);
                    
                    if(health >= 100){
                        health = 100;
                        console.log(`You healed for ${100 - currHealth} hp.`);
                    }else{
                        console.log(`You healed for ${roomsContain[1]} hp.`);
                    }
                }
                
                console.log(`Current health: ${health} hp.`);
                bestRoom++;
                break;
            case "chest":
                console.log(`You found ${roomsContain[1]} coins.`);
                coins += Number(roomsContain[1]);
                bestRoom++;
                break; 
            default:
                bestRoom++;
                health -= Number(roomsContain[1]);
                
                if(health <= 0){
                    dead = true;
                    console.log(`You died! Killed by ${roomsContain[0]}.`);
                    break;
                }else{
                    console.log(`You slayed ${roomsContain[0]}.`);
                }
                break;
        }
        if(dead == true){
            console.log(`Best room: ${bestRoom}`);
            break;
        }
        if(i === rooms.length - 1){
            console.log("You've made it!");
            console.log(`Coins: ${coins}`);
            console.log(`Health: ${health}`);
        }
    }
}

solve(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log("-------------------------");
solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);