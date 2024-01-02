function songInfo(arr) {
    let songNumber = arr.shift();

    for (let i = 0; i < songNumber; i++) {
        let printType = arr[arr.length - 1];

        let song = arr[i].split("_");
        
        if(printType === 'all'){
            console.log(song[1]);
        }else{
            if(song[0] === printType){
                console.log(song[1]);
            }
        }
    }
}

songInfo([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );

songInfo([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    );