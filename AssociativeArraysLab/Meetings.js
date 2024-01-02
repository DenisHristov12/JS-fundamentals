function meetings(arr) {
    let apointments = {};

    for (const el of arr) {
        let [weekDay, name] = el.split(" ");
        
        if(apointments.hasOwnProperty(weekDay)){
            console.log(`Conflict on ${weekDay}!`);
        }else{
            apointments[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    }

    for (const key of Object.keys(apointments)) {
        console.log(`${key} -> ${apointments[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);