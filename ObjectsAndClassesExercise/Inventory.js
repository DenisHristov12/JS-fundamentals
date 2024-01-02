function inventory(arr) {
    let result = [];

    for (const row of arr) {
        let [name, level, items] = row.split(" / ");

        let hero = {
            name: name,
            level: Number(level),
            items: items.split(", ")
        };
        result.push(hero);
    }

    result.sort((a, b) => a.level - b.level);

    for (const hero of result) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);