function movieInfo(arr) {
    for (let command of arr) {
        let moviesObject = {};

        if (command.includes("addMovie")) {
          let movieName = command.replace("addMovie ", "");
          moviesObject.name = movieName;

          for (let secondCommand of arr) {

            if (secondCommand.includes(`${movieName} directedBy`)) {
              let director = secondCommand.replace(`${movieName} directedBy `,"");
              moviesObject.director = director;
            }

            if (secondCommand.includes(`${movieName} onDate`)) {
              let date = secondCommand.replace(`${movieName} onDate `,'');
              moviesObject.date = date;
            }

          }

          if (Object.keys(moviesObject).length === 3) {
            console.log(JSON.stringify(moviesObject));
          }
        }
    }
    
}

movieInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );