window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
    const addToListFunctionDisplay = document.getElementById('addToListFunction')
    const addToListAction = document.getElementById('addToListAction');
    const nameDisplay = document.getElementById('nameDisplay').value;
    const listDisplay = document.getElementById('listDisplay');

functionCallsAction.onclick = function() {
    simpleFunction();
}

function simpleFunction() {
    console.log("functions should consist os statement designed to perform a single task.");
    simpleFunctionDisplay.textContent = "some other texts";
}
    //simpleFunction();


addToListAction.onclick = function(){
    const nameDisplay = document.getElementById('nameDisplay').value;
    const listDisplay = document.getElementById('listDisplay');
    addlistFunction(listDisplay,nameDisplay);

}


    function addlistFunction (list, value) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }


// function addlistFunction(){
//     const nameDisplay = document.getElementById('nameDisplay').value;

//     console.log("Add item to list.");
//     addToListFunctionDisplay.textContent = nameDisplay;
// }





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
}
