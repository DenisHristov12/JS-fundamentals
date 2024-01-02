function townCoordinates(arr) {
    let town = {};

    for (let i = 0; i < arr.length; i++) {
        let singleTownInfo = arr[i].split(" | ");

        town.town = singleTownInfo[0];
        town.latitude = Number(singleTownInfo[1]).toFixed(2);
        town.longitude = Number(singleTownInfo[2]).toFixed(2);
        
        console.log(town);
    }
}

townCoordinates(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);