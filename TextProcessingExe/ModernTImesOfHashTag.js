function hashTag(str) {
    let words = str.split(" ");

    for (let el of words) {
        if(el.startsWith("#") && el.length > 1){
            let isSpecial = true; 
            el = el.substring(1);
            for (let ch of el) {
                ch = ch.toLowerCase();
                if(ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122){
                    isSpecial = false;
                    break;
                }
            }
            if(isSpecial){
                console.log(el);
            }
        }
    }
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');