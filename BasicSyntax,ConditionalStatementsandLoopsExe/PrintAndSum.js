function sum(start, end) {
    let sum = 0;
    let result = '';

    for (let i = start; i <= end; i++) {
        result += `${i} `;
        sum += i;
    }

    console.log(result.trim());
    console.log(`Sum: ${sum}`);
}

sum(5, 10);