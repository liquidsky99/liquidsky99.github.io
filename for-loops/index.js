window.onload = () => {
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };

    const listButton = document.getElementById('runForLoop');

    listButton.onclick = () => {
        const myList = document.getElementById('myList');
            
            elfCode.appendToList(myList, 1);
            elfCode.appendToList(myList, 2);
            elfCode.appendToList(myList, 3);
            
    }
}                    
        
