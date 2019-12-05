window.onload = () => {
    
    const functionObjectDisplay = document.getElementById('functionObjectDisplay');
    const functionObjectAction = document.getElementById('functionObjectAction');

    
    function FunctionObject()  {
        const firstName = 'James';
        const lastName = 'Watson';
    
        FunctionObject.prototype.getFullName = () => {
            return firstName + ' ' + lastName;
        }
    
        const privateFunction = () => {
            return 'I can only be called from inside FunctionObject.'
        }
    
        FunctionObject.prototype.callPrivateFunction = () => {
            return 'The private function says: ' + privateFunction();
        }
    }


    functionObjectAction.onclick = function() {
        const constructorFunctionDisplay = document.getElementById('functionObjectDisplay')
        const functionObject = new FunctionObject();
    
        constructorFunctionDisplay.textContent = functionObject.getFullName();
    }

    function FunctionObject()  {
        const firstName = 'Rosalind';
        const lastName = 'Franclin';
    
        FunctionObject.prototype.getFullName = () => {
            return firstName + ' ' + lastName;
        }
    
        const privateFunction = () => {
            return 'I can only be called from inside FunctionObject.'
        }
    
        FunctionObject.prototype.callPrivateFunction = () => {
            return 'The private function says: ' + privateFunction();
        }
    }


    functionConstructorObjectAction.onclick = function() {
        const constructorFunctionDisplay = document.getElementById('functionObjectDisplay')
        const functionObject = new FunctionObject();
    
        constructorFunctionDisplay.textContent = functionObject.getFullName();
    }

    function FunctionObject()  {
        const firstName = 'Francis';
        const lastName = 'Crick';
    
        FunctionObject.prototype.getFullName = () => {
            return firstName + ' ' + lastName;
        }
    
        const privateFunction = () => {
            return 'I can only be called from inside FunctionObject.'
        }
    
        FunctionObject.prototype.callPrivateFunction = () => {
            return 'The private function says: ' + privateFunction();
        }
    }


    functionCustomObjectAction.onclick = function() {
        const constructorFunctionDisplay = document.getElementById('functionObjectDisplay')
        const functionObject = new FunctionObject();
    
        constructorFunctionDisplay.textContent = functionObject.getFullName();
    }
}