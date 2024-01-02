function match(dateArr) {
    let pattern = /\b(?<day>[0-9]{2})(?<separator>[-.\/])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>[0-9]{4})\b/g;

    for (let i = 0; i < dateArr.length; i++) {
        let text = dateArr[i];
        let match = [...text.matchAll(pattern)];
        for (let j = 0; j < match.length; j++) {
            let res = `Day: ${match[j].groups.day}, Month: ${match[j].groups.month}, Year: ${match[j].groups.year}`;
            console.log(res);
        }
    }
}

match(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);