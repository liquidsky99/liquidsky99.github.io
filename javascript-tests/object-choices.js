window.onload = () => {
    
    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectAction = document.getElementById('simpleObjectAction');

    //simpleObjectDisplay.textContent = 'foo';

    
    const simpleObject = {
        firstName: 'James',
        lastName: 'Watson',
        SayName: function(){
            const fullName = this.firstName + " " + this.lastName;
            console.log(fullName);
            simpleObjectDisplay.textContent = fullName;
        }

    };


    simpleObjectAction.onclick = function(){
        simpleObject.sayName();
    }



simpleObject.dynamicMethod = function(){
    console.log("Dynamic Method");
}


class CustomClass {
    sayName(){
        console.log("Custom Class");
    }
}


//simpleObject.sayName();
simpleObject.dynamicMethod();

const functionObject = new FunctionObject();
functionObject.sayName();

const customClass = new CustomClass();
customClass.sayName();


}