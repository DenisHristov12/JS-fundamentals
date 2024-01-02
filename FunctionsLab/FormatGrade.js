function formatGrade(grade) {
    let gradeResult = '';

    if(grade < 3){
        gradeResult = 'Fail';
    }else if(grade < 3.5){
        gradeResult = 'Poor';
    }else if(grade < 4.5){
        gradeResult = 'Good';
    }else if(grade < 5.5){
        gradeResult = 'Very good';
    }else if(grade >= 5.5){
        gradeResult = 'Excellent';
    }

    let result = grade < 3 ? '2' : grade.toFixed(2);

    console.log(`${gradeResult} (${result})`);
}

formatGrade(2.3);