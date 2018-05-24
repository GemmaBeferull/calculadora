function application() {
    function sum (numberOne, numberTwo) {
        return numberOne + numberTwo;
    };

    function subtract(numberOne, numberTwo) {
        return numberOne- numberTwo;
    };
    function multiply(numberOne, numberTwo) {
        return numberOne* numberTwo;
    };
    function divide(numberOne, numberTwo) {
        return numberOne/ numberTwo;
    };
    
    const calculatorButton = document.querySelectorAll(".calculatorButton");
    for(let i = 0; i < calculatorButton.length; i++){
        calculatorButton[i].addEventListener('click', function(event){ 
            let numberValue = event.currentTarget.value;
        }); 
    }

    
    
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