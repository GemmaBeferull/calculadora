function application() {
    function sum (a, b) {
        return a + b
    };

    function subtract (a, b) {
        return a - b
    };
    function multiply (a, b) {
        return a * b
    };
    function divide (a, b) {
        return a / b
    };
    
    return {
        sum,
        subtract,
        multiply,
        divide
    }
}

// be able to import the file in node
if (typeof(module) != 'undefined'){
    module.exports = application;
}