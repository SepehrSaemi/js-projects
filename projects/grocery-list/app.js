const grocerySubmit = document.getElementById("grocery-submit");
const groceryInput = document.getElementById("grocery-input");
const groceryList = document.getElementById("grocery-list");

function addGroceryItem(e) {
    e.preventDefault(); // Avoids reloading the page when new item is added
    let groceryItem = groceryInput.value;

    if (groceryItem) {
        groceryList.innerHTML += `
            <li class="flex items-center justify-between mb-2">
                <span class="pl-2 text-lg font-medium">${groceryItem}</span>
                <button class="delete-btn rounded-md bg-red-500 px-2 py-1 text-white">Delete</button>
            </li>`;

        addToLocalStorage(groceryItem);
    }

    groceryInput.value = "";
}

function deleteGroceryItem(e) {
    if (e.target.classList.contains("delete-btn")) {
        const itemText = e.target.parentElement.querySelector("span").textContent;
        e.target.parentElement.remove();
        deleteFromLocalStorage(itemText);
    }
}

function addToLocalStorage(groceryItem) {
    let groceryItems = JSON.parse(localStorage.getItem("groceryList")) || [];
    groceryItems.push(groceryItem);
    localStorage.setItem("groceryList", JSON.stringify(groceryItems));
}

function deleteFromLocalStorage(groceryItem) {
    let groceryItems = JSON.parse(localStorage.getItem("groceryList")) || [];
    let index = groceryItems.indexOf(groceryItem);

    console.log(groceryItem, index);
    groceryItems.splice(index, 1);
    localStorage.setItem("groceryList", JSON.stringify(groceryItems));
}

function loadFromLocalStorage() {
    let groceryItems = JSON.parse(localStorage.getItem("groceryList")) || [];
    groceryItems.forEach((item) => {
        groceryList.innerHTML += `
            <li class="flex items-center justify-between mb-2">
                <span class="pl-2 text-lg font-medium">${item}</span>
                <button class="delete-btn rounded-md bg-red-500 px-2 py-1 text-white">Delete</button>
            </li>`;
    });
}

groceryList.addEventListener("click", (e) => deleteGroceryItem(e));
grocerySubmit.addEventListener("click", (e) => addGroceryItem(e));
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);
