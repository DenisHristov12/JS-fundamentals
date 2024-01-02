function guestsTrack(arr) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(" ");

        for (let j = 0; j < command.length; j++) {
            if(command[2].includes('not')){
                if(list.includes(command[0])){
                    let index = list.indexOf(command[0]);
                    list.splice(index, 1);
                    break;
                }else{
                    console.log(`${command[0]} is not in the list!`);
                    break;
                }
            }else{
                if(list.includes(command[0])){
                    console.log(`${command[0]} is already in the list!`);
                    break;
                }else{
                    list.push(command[0]);
                    break;
                }
            }
        }
    }

    console.log(list.join("\n"));
}

guestsTrack(['Allie is going!','George is going!','John is not going!','George is not going!']);
console.log('--------------------------');
guestsTrack(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
);