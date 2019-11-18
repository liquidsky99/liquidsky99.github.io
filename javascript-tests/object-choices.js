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