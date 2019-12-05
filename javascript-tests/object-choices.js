window.onload = () => {
    
    const functionObjectDisplay = document.getElementById('functionObjectDisplay');
    const functionObjectAction = document.getElementById('functionObjectAction');
    const functionConstructorObjectDisplay = document.getElementById('functionConstructorObjectDisplay');
    const functionConstructorObjectAction = document.getElementById('functionConstructorObjectAction');
    const functionCustomObjectDisplay = document.getElementById('functionCustomObjectDisplay');
    const functionCustomObjectAction = document.getElementById('functionCustomObjectAction');

    
    function FunctionObject()  {
        const firstName = 'James';
        const lastName = 'Watson';
    
        FunctionObject.prototype.getFullName = () => {
            return firstName + ' ' + lastName;
        }
    }

    function FunctionSecondObject()  {
        const firstName = 'James';
        const middleName = 'barfoo';
        const lastName = 'Watson';
    
        FunctionSecondObject.prototype.getSecondFullName = () => {
            return firstName + ' ' + middleName + ' ' + lastName;
        }
    
        /* const privateFunction = () => {
            return 'I can only be called from inside FunctionObject.'
        }
    
        FunctionObject.prototype.callPrivateFunction = () => {
            return 'The private function says: ' + privateFunction();
        } */
    }


    functionObjectAction.onclick = function() {
        const constructorFunctionDisplay = document.getElementById('functionObjectDisplay')
        const functionObject = new FunctionObject();
        const constructorFunctionSecondDisplay = document.getElementById('functionSecondObjectDisplay')
        const functionSecondObject = new FunctionSecondObject();
    
        constructorFunctionDisplay.textContent = "Get Name: " + functionObject.getFullName();
        constructorFunctionSecondDisplay.textContent = "Get Full Name: " + functionSecondObject.getSecondFullName();
    }

    function FunctionConstructorObject()  {
        const firstName = 'Rosalind';
        const lastName = 'Franclin';
    
        FunctionConstructorObject.prototype.getFullName = () => {
            return firstName + ' ' + lastName;
        }
    
        /* const privateFunction = () => {
            return 'I can only be called from inside FunctionObject.'
        }
    
        FunctionConstructorObject.prototype.callPrivateFunction = () => {
            return 'The private function says: ' + privateFunction();
        } */
    }


    functionConstructorObjectAction.onclick = function() {
        const constructorFunctionConstructorDisplay = document.getElementById('functionConstructorObjectDisplay')
        const functionConstructorObject = new FunctionConstructorObject();
    
        constructorFunctionConstructorDisplay.textContent = "Constructor Function Full Name: " + functionConstructorObject.getFullName();
    }

    function FunctionCustomObject()  {
        const firstName = 'Francis';
        const lastName = 'Crick';
    
        FunctionCustomObject.prototype.getFullName = () => {
            return firstName + ' ' + lastName;
        }
    
       /*  const privateFunction = () => {
            return 'I can only be called from inside FunctionObject.'
        }
    
        FunctionCustomObject.prototype.callPrivateFunction = () => {
            return 'The private function says: ' + privateFunction();
        } */
    }


    functionCustomObjectAction.onclick = function() {
        const constructorFunctionCustomDisplay = document.getElementById('functionCustomObjectDisplay')
        const functionCustomObject = new FunctionCustomObject();
    
        constructorFunctionCustomDisplay.textContent = "Custom Class Full Name: " + functionCustomObject.getFullName();
    }
    }
