let groceryItems = [];

function addToList(items) {
    items.forEach(item => {
        if (!groceryItems.includes(item)) {
            groceryItems.push(item);
        }
    });

    displayList();
}

function displayList() {
    const list = document.getElementById("groceryList");
    list.innerHTML = "";

    groceryItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

function clearList() {
    groceryItems = [];
    displayList();
}

function printList() {
    window.print();
}
