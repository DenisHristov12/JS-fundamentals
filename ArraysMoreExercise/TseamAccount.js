function manageAccount(comands) {
    let games = comands[0].split(" ");
    let result = '';
    let account = [];

    for (let i = 0; i < games.length; i++) {
        account.push(games[i]);
    }
    
    for (let i = 1; i < comands.length; i++) {
        let newCommand = comands[i].split(" ");

        switch(newCommand[0]){
            case "Install":
                if(!account.includes(newCommand[1])){
                    account.push(newCommand[1]);
                }
                break;
            case "Uninstall":
                for (let i = 0; i < account.length; i++) {
                    if(account[i] === newCommand[1]){
                        delete account[i];
                        break;
                    }
                }
                break;
            case "Update":
                for (let i = 0; i < account.length; i++) {
                    let buff = newCommand[1];
                    
                    if(account[i] === newCommand[1]){
                        delete account[i];
                        account.push(buff);
                        break;
                    }
                }
                break;
            case "Expansion":
                let separateExp = newCommand[1].split("-");
                
                for (let i = 0; i < account.length; i++) {
                    if(account[i] === separateExp[0]){
                        let expanded = newCommand[1].replace("-",":");
                        account.splice(i + 1, 0, expanded);
                        break;
                    }
                }
                break;
            case "Play!":
                for (let i = 0; i < account.length; i++) {
                    if(account[i] !== undefined){
                        result += account[i] + " ";
                    }
                }
                return result;
        }
    }
}

console.log(manageAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
));