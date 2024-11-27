function addItem() {
    const item = document.getElementById("new-todo-item-title").value;
    document.getElementById("todo-list").innerHTML += "<li>" + item;
    document.getElementById("todo-list").innerHTML += "<button onclick='deleteItem()'>Delete</button>";
    document.getElementById("todo-list").innerHTML += "<button onclick='editItem(" + item + ")'>Edit</button> </li>";
    document.getElementById("new-todo-item-title").value = "";
}



function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 


//pas encore fonctionnel
function editItem() {
    let x = document.getElementById("next-item");
    let y = document.getElementById("edit-item");
    if (x.style.display == "hidden") {
        x.style.display = "block";
        y.style.display = "hidden";
      } else {
        x.style.display = "hidden";
        y.style.display = "block";
      }
    const item = document.getElementById("edit-todo-item-title").value;
    document.getElementById("todo-list").innerHTML += "<li>" + item + "</li>";

    document.getElementById("edit-todo-item-title").value = "";
}

//pas encore fonctionnel
function cancelEditItem() {}

//pas encore fonctionnel
function deleteItem(item) {
    item = "";
}