    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };
    
    window.onload = () => {
    
        const listButton = document.getElementById('runForLoop');
    
        listButton.onclick = () => {
            const myList = document.getElementById('myList');
            for (var i = 0; i < 5; i++){
                elfCode.appendToList(myList, i);
            }
        }
    }
   
                   
        
