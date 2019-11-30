window.onload = () => {
    
    const functionObjectDisplay = document.getElementById('functionObjectDisplay');
    const functionObjectAction = document.getElementById('functionObjectAction');
    const calculatorDisplay = document.getElementById('calculatortDisplay');
    const calculatorAction = document.getElementById('calculatorAction');

    
    const functionObject = {
        firstName: 'George',
        lastName: 'Washington',
        sayName: function(){
            const fullName = this.firstName + " " + this.lastName;
            var name = 'First Name: '.concat(this.firstName,'<br>', 'Last Name: ', this.lastName,'<br>','Full Name: ', fullName);
            console.log(fullName);
            functionObjectDisplay.innerHTML = name;
        }
        
    };


    functionObjectAction.onclick = function(){
        functionObject.sayName();
    }

    const calculator = {
        firstName: 'George',
        lastName: 'Washington',
        nameLength: function(){
            const fullName = this.firstName + " " + this.lastName;
            var number = 'First Name: '.concat(this.firstName,'<br>', 'Last Name: ', this.lastName,'<br>','Full Name: ', fullName);
            console.log(fullName);
            calculatorDisplay.innerHTML = number;
        }
        
    };


    calculatorAction.onclick = function(){
        calculator.nameLength();
    }  
    
}
