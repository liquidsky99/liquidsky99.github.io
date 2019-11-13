window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

functionCallsAction.onclick = simpleFunction;

function simpleFunction() {
    console.log("functions should consist os statement designed to perform a single task.");
    simpleFunctionDisplay.textContent = "some other texts";
}
    simpleFunction();
}

function functionParameters(value){
    console.log(value);
}

function functionReturn(){
    return "Many functions return values.";
}

function add (a, b){
    return a + b;
}

//simpleFunction();

functionParameters("Many functions take parameters.");

const addResult = add(2, 3);

const returnValue = functionReturn(addResult);

console.log(returnValue);

const result = add(2, 3);
console.log(result);

