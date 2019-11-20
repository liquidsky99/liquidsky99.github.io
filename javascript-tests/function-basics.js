window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

functionCallsAction.onclick = function() {
    simpleFunction();
}

function simpleFunction() {
    console.log("functions should consist os statement designed to perform a single task.");
    simpleFunctionDisplay.textContent = "some other texts";
}
    //simpleFunction();
}

function functionParameters(value){
    console.log(value);
}

function functionReturn(addResult){
    return "The add function returned" + addResult;
}

function add (a, b){
    const addResult = a + b;
    console.log('Inside add', addResult);
    return addResult;
}


functionParameters("Many functions take parameters.");

const addResult = add(2, 3);

const returnValue = functionReturn(addResult);

console.log(returnValue);

const result = add(2, 3);
console.log(result);

