function smallestNum(n1, n2, n3) {
    if(n1 < n2 && n1 < n3){
        return n1;
    }else if(n2 < n1 && n2 < n3){
        return n2;
    }else if(n3 < n1 && n3 < n1){
        return n3;
    }else{
        return n1;
    }
}

console.log(smallestNum(2, 5, 3));