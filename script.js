let currentInput = "";
let currentOperator = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById("display").value = currentInput;
}

function clearDisplay(){
    currentInput = "";
    document.getElementById("display").value = "";
}

function calculateResult(){
    try {
        currentInput = eval(currentInput);
        document.getElementById("display").value = currentInput; 
    } catch (error){
        document.getElementById("display").value - "Error";
    }
}
