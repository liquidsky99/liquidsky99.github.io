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
        language: ["JavaScript","HTML","CSS","C#","Java","Python","C/C++"]
    };

    languagearrays.language.sort();

    languageAction.onclick = () => { 
        for (let language of languagearrays.language){
        console.log(language);
        elfCode.appendToList(languageDisplay, language);
         }
    }

    var programinglanguage = [
        {
            language: 'JavaScript',
            rank: 2
        },
        {
            language: 'HTML/CSS',
            rank: 1
        },
        {
            languageName: 'Python',
            rank: 3
        },
        {
            languageName: 'Java',
            rank: 4
        },
        {
            languageName: 'C#',
            rank: 5
        },
        {
            languageName: 'C/C++',
            rank: 6
        }
    ];

    const popularityAction = document.getElementById('popularity-action');
    const popularityDisplay = document.getElementById('popularity-display');

    const popularityarrays = {
        language: ["JavaScript","HTML/CSS","Python","Java","C#","C/C++"]
    };

    function compareRank(a, b) {
        const rankA = a.rank;
        const rankB = b.rank;
   
       let comparison = 0;
       if (rankA > rankB ) {
           comparison = 1;
       } else if (rankA < rankB) {
           comparison = -1;
       }
       return comparison;
   }
    
    programinglanguage.sort(compareRank);
    /* popularityarrays.popularity.sort(compareRank); */

    languageAction.onclick = () => { 
        for (let language of popularityarrays.language){
        console.log(popularity);
        elfCode.appendToList(popularityDisplay, language);
         }
    }

    
    }