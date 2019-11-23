window.onload = () => {
    
    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectAction = document.getElementById('simpleObjectAction');

    
    const simpleObject = {
        firstName: 'James',
        lastName: 'Watson',
        sayName: function(){
            const fullName = this.firstName + " " + this.lastName;
            var name = 'Name'.concat(this.firstName,'<br>','Full Name ', fullName);
            
            console.log(fullName);
            simpleObjectDisplay.innerHTML = name;
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
