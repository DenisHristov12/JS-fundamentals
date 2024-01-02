function checkPalindrome(arr) {
    let isPalindrome = false;

    for (let i = 0; i < arr.length; i++) {
        let currEl = arr[i];
        let currElToString = currEl.toString();

        let resultFirstNum = '';
        let resultSecondNum = '';

        for (let j = 0; j < currElToString.length; j++) {
            resultFirstNum += currElToString[j];
        }

        for (let k = currElToString.length - 1; k >= 0; k--) {
            resultSecondNum += currElToString[k];
        }

        if(resultFirstNum === resultSecondNum){
            isPalindrome = true;
        }else{
            isPalindrome = false;
        }

        console.log(isPalindrome);
        
    }

    //return result;
}

checkPalindrome([32,2,232,1010]);