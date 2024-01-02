function calculate(bandName, albumName, songName) {
    let songDuration = (albumName.length * bandName.length) * songName.length / 2;

    let rotations = 0;

    for (let i = 0; i < songDuration; i+= 2.5) {
        rotations += 1;
    }

    console.log(`The plate was rotated ${rotations} times.`);

}

calculate('Black Sabbath', 'Paranoid', 'War Pigs');