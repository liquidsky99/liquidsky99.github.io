window.onload = () => {
    // All code goes in here.
    const feetToInches = document.getElementById('feetToInchesAction');
    const milesToFeet = document.getElementById('milesToFeetAction');
    const areaOfCircle = document.getElementById('areaOfCircleAction')
    const areaOfTriangle = document.getElementById('areaOfTriangleAction');
    const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');
    const milesToFeetDisplay = document.getElementById('milesToFeetDisplay');
    const areaOfCircleDispaly = document.getElementById('areaOfCircleDisplay')
    const areaOfTriangleDisplay = document.getElementById('areaOfTriangleDisplay');
    const addToListAction = document.getElementById('addToListAction');
    const nameDisplay = document.getElementById('nameDisplay').value;
    const listDisplay = document.getElementById('listDisplay');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feetToInchesInput');
        const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    };
};

const feetToInches = (feet) => {
    return feet * 12;
};
                    

addToListAction.onclick = function(){
    const nameDisplay = document.getElementById('nameDisplay').value;
    const listDisplay = document.getElementById('listDisplay');
    addlistFunction(listDisplay,nameDisplay);

}


function addlistFunction(){
    const nameDisplay = document.getElementById('nameDisplay').value;

    console.log("Add item to list.");
    addToListFunctionDisplay.textContent = nameDisplay;
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

