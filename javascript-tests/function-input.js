window.onload = () => {
   
    const feetToInchesAction = document.getElementById('feetToInchesAction');
    const milesToFeetAction = document.getElementById('milesToFeetAction');
    const areaOfCircleAction = document.getElementById('areaOfCircleAction');
    const areaOfTriangleAction = document.getElementById('areaOfTriangleAction');
    
    feetToInchesAction.onclick = () => {
        
        const feetToInchesInput = document.getElementById('feetToInchesInput');
        const feetToInches = (feet) => {
            return feet * 12;
        };
 
        document.getElementById("feetToInchesDisplay").innerHTML= feetToInches(feetToInchesInput.value);
    };

    milesToFeetAction.onclick = () => {
        
        const milesToFeetInput = document.getElementById('milesToFeetInput');
        const milesToFeet = (miles) => {
            return miles * 5280;
        };
 
        document.getElementById("milesToFeetDisplay").innerHTML= milesToFeet(milesToFeetInput.value);
    };

    areaOfCircleAction.onclick = () => {
        
        const areaOfCircleInput = document.getElementById('areaOfCircleInput');
        const areaOfCircle = (radius) => {
            return Math.PI * (radius * radius);
        };
 
        document.getElementById("areaOfCircleDisplay").innerHTML= areaOfCircle(areaOfCircleInput.value);

    };

    areaOfTriangleAction.onclick = () => {
        
        const areaOfTriangleBaseInput = document.getElementById('areaOfTriangleBaseInput');
        const areaOfTriangleHeightInput = document.getElementById('areaOfTriangleHeightInput');
        const areaOfTriangle = (base, height) => {
            return (base * height)/2;
        };
 
        document.getElementById("areaOfTriangleDisplay").innerHTML= areaOfTriangle(areaOfTriangleBaseInput.value,areaOfTriangleHeightInput.value);

    };
};


