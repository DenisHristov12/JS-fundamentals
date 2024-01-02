function cityInfo(obj) {
    for (const key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

cityInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);