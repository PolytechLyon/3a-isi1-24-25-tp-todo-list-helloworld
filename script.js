const todoList = document.getElementById('todo-list');
const newItem = document.getElementById('new-item');
const newItemTitle = document.getElementById('new-todo-item-title');
const newItemAddButton = document.getElementById('new-todo-item-add');
const editItem = document.getElementById('edit-item');
const editItemTitle = document.getElementById('edit-todo-item-title');
const editItemConfirmButton = document.getElementById('edit-todo-item-confirm');
const editItemCancelButton = document.getElementById('edit-todo-item-cancel');

let itemToEdit = null;

newItemAddButton.addEventListener('click', () => {
  const title = newItemTitle.value.trim();
  if (title) {
    addTodoItem(title);
    newItemTitle.value = '';
  }
});

function addTodoItem(title) {
  const li = document.createElement('li');
  li.textContent = title;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit');
  editButton.addEventListener('click', () => enableEditMode(li));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => li.remove());

  li.appendChild(editButton);
  li.appendChild(deleteButton);

  todoList.appendChild(li);
}

function enableEditMode(itemElement) {
  itemToEdit = itemElement;
  editItemTitle.value = itemElement.firstChild.textContent;
  newItem.hidden = true;
  editItem.hidden = false;
}

function disableEditMode() {
  itemToEdit = null;
  editItem.hidden = true;
  newItem.hidden = false;
}

editItemCancelButton.addEventListener('click', disableEditMode);

function confirmEdit() {
  if (itemToEdit) {
    itemToEdit.firstChild.textContent = editItemTitle.value.trim();
    disableEditMode();
  }
}

editItemConfirmButton.addEventListener('click', confirmEdit);