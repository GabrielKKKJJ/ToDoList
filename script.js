var addButton = document.getElementById("add-todo");
var deleteButton = document.getElementById("delete-todo");
var input = document.getElementById("todo-input");

addButton.addEventListener("click", function() {
    var todo = input.value;
    if (todo === "") {
        alert("Enter a value");
    } else {
        createItem(todo);
    } 
})

function createItem(todo) {
    var li = document.createElement("li");
    var text = document.createTextNode(todo);
    li.appendChild(text);
    document.querySelector(".list").appendChild(li);

    var button = document.createElement("button");
    button.className = "delete";
    var buttonText = document.createTextNode("Delete");
    button.appendChild(buttonText);
    li.appendChild(button);
    button.addEventListener("click", deleteItem);
    input.value = "";
}

function deleteItem(event) {
    var button = event.target;
    var li = button.parentElement;
    var ul = li.parentElement;
    ul.removeChild(li);
}