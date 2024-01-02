function checkPassword(input) {
    let username = input[0];
    let password = '';

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let incorrectPasswordCount = 0;

    for (let i = 1; i < input.length; i++) {
        if(input[i] === password){
            console.log(`User ${username} logged in.`);
        }else{
            if(incorrectPasswordCount === 3){
                console.log(`User ${username} blocked!`);
            return;
            }
            console.log("Incorrect password. Try again.");
            incorrectPasswordCount++;
        }
        
    }
}

checkPassword(['Acer','login','go','let me in','fsfs','sff','recA']);