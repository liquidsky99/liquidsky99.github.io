window.onload = () => { 

    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };

    const numbersAction = document.getElementById('numbers-action');
    const numbersDisplay = document.getElementById('numbers-display');

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5]
    };

    arrays.numbers.sort((a, b) => a - b);

    numbersAction.onclick = () => { 
        for (let number of arrays.numbers){
        console.log(number);
        elfCode.appendToList(numbersDisplay, number);
         }
    }

    const languageAction = document.getElementById('language-action');
    const languageDisplay = document.getElementById('language-display');

    const languagearrays = {
        language: ["JavaScript","HTML","CSS","C#","Java","C#","Python","C/C++"]
    };

    languagearrays.language.sort();

    languageAction.onclick = () => { 
        for (let language of languagearrays.language){
        console.log(language);
        elfCode.appendToList(languageDisplay, language);
         }
    }

    
    }