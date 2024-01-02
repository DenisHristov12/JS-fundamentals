function calculateOrder(product, quantity) {
    let price = 0;
    let result = 0;
    
    switch (product) {
        case "coffee":
            price = 1.5;
            result = quantity * price;
            break;
        case "water":
            price = 1;
            result = quantity * price;
            break;
        case "coke":
            price = 1.4;
            result = quantity * price;
            break;
        case "snacks":
            price = 2;
            result = quantity * price;
            break;
        default:
            console.log("No such product!");
            break;
    }

    return result.toFixed(2);
}

console.log(calculateOrder("water", 5));