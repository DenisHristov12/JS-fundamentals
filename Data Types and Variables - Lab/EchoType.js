function type(param1) {
    let paramType = typeof(param1);

    console.log(paramType);

    if(paramType === "string" || paramType === "number"){
        console.log(param1);
    }else{
        console.log("Parameter is not suitable for printing");
    }
}

type(null);