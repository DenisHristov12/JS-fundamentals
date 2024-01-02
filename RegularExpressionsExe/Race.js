function raceInfo(arr) {
    let regexName = /[A-Za-z]/g;
    let regexDistance = /[0-9]/g;
    let names = arr.shift().split(", ");
    let sumInKm = 0;

    let participants = {};

    for (const participant of names) {
        participants[participant] = 0;
    }

    for (const line of arr) {
        if (line === "end of race") {
            break;
        }

        let name = line.match(regexName).join("");
        let distance = line.match(regexDistance);
        let tempDistance = 0;

        for (const el of distance) {
            tempDistance += Number(el);
        }

        if(participants.hasOwnProperty(name)){
            participants[name] += tempDistance;
        }
    }

    let sortArr = Object.entries(participants).sort((a,b) => b[1] - a[1]);
    console.log(`1st place: ${sortArr[0][0]}`);
    console.log(`2nd place: ${sortArr[1][0]}`);
    console.log(`3rd place: ${sortArr[2][0]}`);
}

raceInfo(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
);