window.onload = () => {
    
    const functionObjectDisplay = document.getElementById('functionObjectDisplay');
    const functionObjectAction = document.getElementById('functionObjectAction');

    
    const functionObject = {
        firstName: 'James',
        lastName: 'Watson',
        sayName: function(){
            const fullName = this.firstName + " " + this.lastName;
            var name = 'Get Name: '.concat(this.firstName,'<br>','Get Full Name: ', fullName);
            console.log(fullName);
            functionObjectDisplay.innerHTML = name;
        }

    };


    functionObjectAction.onclick = function(){
        functionObject.sayName();
    }


    functionObject.dynamicMethod = function(){
    console.log("Dynamic Method");
}


class CustomClass {
    sayName(){
        console.log("Custom Class");
    }
}


//simpleObject.sayName();
functionObject.dynamicMethod();

/* const functionObject = new FunctionObject();
functionObject.sayName(); */

const customClass = new CustomClass();
customClass.sayName();

}
