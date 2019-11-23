window.onload = () => {
    // All code goes in here.
    const addToListFunctionDisplay = document.getElementById('addToListFunction');

const elfCode = {
    addlistFunction: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
}

