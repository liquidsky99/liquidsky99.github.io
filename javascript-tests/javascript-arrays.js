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

    const languageArrays = {
        language: ["JavaScript","HTML","CSS","C#","Java","Python","C/C++"]
    };

    languageArrays.language.sort();

    languageAction.onclick = () => { 
        for (let language of languageArrays.language){
        console.log(language);
        elfCode.appendToList(languageDisplay, language);
         }
    }

    var programminglanguage = [
        {
            language: 'HTML/CSS',
            rank: 2
        },
        {
            language: 'Python',
            rank: 3
        },
        {
            language: 'Java',
            rank: 4
        },
        {
            language: 'C#',
            rank: 5
        },
        {
            language: 'C/C++',
            rank: 6
        },
        {
            language: 'JavaScript',
            rank: 1
        }
    ]

    const popularityAction = document.getElementById('popularity-action');
    const popularityDisplay = document.getElementById('popularity-display');

   /*  const popularityArrays = {
        popularity: ["HTML/CSS","JavaScript","Python","Java","C#","C/C++"]
    }; */

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
    
    programminglanguage.sort(compareRank);

    popularityAction.onclick = () => { 
        for (let popularity of programminglanguage){
        console.log( popularity.rank);
        elfCode.appendToList(popularityDisplay, 
            popularity.language + ':  rank' + popularity.rank);
         }
    }

    
    }