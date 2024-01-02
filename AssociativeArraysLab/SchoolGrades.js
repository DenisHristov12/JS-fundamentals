function grades(arr) {
    let studentGrades = {};
    let average = 0;
    let sum = 0;

    for (const el of arr) {
        let elements = el.split(" ");
        let name = elements.shift();
        let grades = elements;

        if(studentGrades.hasOwnProperty(name)){
            let currentGrades = studentGrades[name];

            let gradesArr = [];

            for (let i = 0; i < grades.length; i++) {
                gradesArr.push(grades[i]);
            }
            for (let j = 0; j < currentGrades.length; j++) {
                gradesArr.push(currentGrades[j]);
            }

            studentGrades[name] = gradesArr;
        }else{
            studentGrades[name] = grades;
        }
    }

    let keys = Object.keys(studentGrades);

    keys.sort((keyA, keyB) => keyA.localeCompare(keyB));


    for (const el of keys) {
        let grades = studentGrades[el];

        
        
        for (let i = 0; i < grades.length; i++) {
            sum += Number(grades[i]);
        }
        average = sum/grades.length;

        studentGrades[el] = average.toFixed(2);

        sum = 0;

        console.log(`${el}: ${studentGrades[el]}`);
    }
}

grades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);