function extract(path) {
    /*
    let pathElements = path.split("\\");
    let fileName;
    let extension;

    for (let i = 0; i < pathElements.length; i++) {
        let file = pathElements[pathElements.length - 1];
        let fileDestruct = file.split(".");
        for (let j = 0; j < fileDestruct.length; j++) {
            fileName = fileDestruct[0];
            extension = fileDestruct[fileDestruct.length - 1];
        }
    }
    */

    let file = path.substring(path.lastIndexOf("\\") + 1);
    let fileName = file.substring(0, file.lastIndexOf("."));
    let extension = file.substring(file.lastIndexOf(".") + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extract('C:\\Internal\\training-internal\\Template.bak.pptx');
extract('C:\\Projects\\Data-Structures\\LinkedList.cs');