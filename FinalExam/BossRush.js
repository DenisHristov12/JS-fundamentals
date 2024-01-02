function bossRush(arr) {
    let numberOfInputs = Number(arr.shift());

    let regex = /\|(?<name>[A-Za-z]+)\|:#(?<title>[A-Za-z]+ [A-Z]*[a-z]+)#/;

    for (let i = 0; i < arr.length; i++) {
        let match = regex.exec(arr[i]);

        if(regex.test(arr[i]) === true){
            let strength = match.groups.name.length;
            let armor = match.groups.title.length;
            console.log(`${match.groups.name}, The ${match.groups.title}`);
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armor: ${armor}`);
        }else{
            console.log("Access denied!");
        }
    }
}

bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
'|ALEX|:#Assistant Game Developer#']);

bossRush(['3',
'|STEFAN|:#H1gh Overseer#',
'|IVAN|:#Master detective#',
'|KARL|: #Marketing lead#']);