function calculate(pageNums, pagesForHour, days) {
    let totalTime = pageNums / pagesForHour;

    let hoursPerDay = totalTime / days;

    console.log(hoursPerDay);
}

calculate(212,20 ,2);