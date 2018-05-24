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
    let clickedButtonsValues = "";

    for(let i = 0; i < calculatorButton.length; i++){
        calculatorButton[i].addEventListener('click', function(event){ 
            clickedButtonsValues += event.currentTarget.value;
            console.log(clickedButtonsValues)
            let hola = eval(clickedButtonsValues);
            console.log(hola)
        }); 
    }
    
    // function createVariablesFromClickedValues() {
    //   let hola = eval(clickedButtonsValues);
    //   console.log(hola)
    // }
    // createVariablesFromClickedValues()

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