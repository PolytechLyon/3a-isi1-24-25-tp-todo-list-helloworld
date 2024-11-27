function addItem() {
    var item = document.getElementById("new-todo-item-title").value;
    document.getElementById("todo-list").innerHTML += "<li>" + item;
    document.getElementById("todo-list").innerHTML += "<button onclick='deleteItem()'>Delete</button>";
    document.getElementById("todo-list").innerHTML += "<button onclick='editItem()'>Edit</button> </li>";
    document.getElementById("new-todo-item-title").value = "";
}

//pas encore fonctionnel
function editItem() {
    var item = document.getElementById("edit-todo-item-title").value;
    document.getElementById("todo-list").innerHTML += "<li>" + item + "</li>";
    document.getElementById("edit-todo-item-title").value = "";
}

//pas encore fonctionnel
function cancelEditItem() {}

//pas encore fonctionnel
function deleteItem() {
    document.getElementById("element").innerHTML = "";
}