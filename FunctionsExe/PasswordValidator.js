function validation(password) {
    let length = password.length;
    let digitsCount = 0;

    let isValidLength = false;
    let isValidDigits = false;
    let isValidSymbols = false;

    if(length < 6 || length > 10){
        isValidLength = false;
    }else{
        isValidLength = true;
    }

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if(char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57){
            digitsCount++;
        }

        if((char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) || (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)){
            isValidSymbols = true;
        }else{
            isValidSymbols = false;
            break;
        }
    }
    
    if(digitsCount >= 2){
        isValidDigits = true;
    }else{
        isValidDigits = false;
    }

    if(isValidLength === true && isValidDigits === true && isValidSymbols === true){
        console.log("Password is valid");
    }else{
        if(isValidLength === false){
            console.log("Password must be between 6 and 10 characters");
        }
        if(isValidSymbols === false){
            console.log("Password must consist only of letters and digits");
        }

        if(isValidDigits === false){
            console.log("Password must have at least 2 digits");
        }
    }
}

validation('logIn');
console.log('---------------------------');
validation('MyPass123');
console.log('----------------------------');
validation('Pa$s$s');