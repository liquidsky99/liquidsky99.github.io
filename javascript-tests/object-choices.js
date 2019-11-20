window.onload = () => {
    // All code goes in here.
    //const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    //const functionCallsAction = document.getElementById('functionCallsAction');

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

functionCallsAction.onclick = function() {
    simpleObject();
}

function simpleObject() {
    console.log("functions should consist os statement designed to perform a single task.");
    simpleObjectDisplay.textContent = "Get Name: James Watson";
}
    //simpleFunction();
}



const simpleObject = {
    sayName: function(){
        console.log("Simple Object");
    }
};

simpleObject.dynamicMethod = function(){
    console.log("Dynamic Method");
}

function FunctionObject(){
    FunctionObject.prototype.sayName = function(){
        console.log("Function Object");
    }

}

class CustomClass {
    sayName(){
        console.log("Custom Class");
    }
}


simpleObject.sayName();
simpleObject.dynamicMethod();

const functionObject = new FunctionObject();
functionObject.sayName();

const customClass = new CustomClass();
customClass.sayName();