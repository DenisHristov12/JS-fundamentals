function addAndSubtract(n1, n2, n3) {
    let sum = function (a, b) {
        return a + b;
    };

    let subtract = function(a, b) {
        return a - b;
    };

    let result = subtract(sum(n1, n2), n3);

    return result;
}

console.log(addAndSubtract(23, 6, 10));