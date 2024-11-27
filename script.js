const todoList = document.getElementById('todo-list');
const newItem = document.getElementById('new-item');
const newItemTitle = document.getElementById('new-todo-item-title');
const newItemAddButton = document.getElementById('new-todo-item-add');
const editItem = document.getElementById('edit-item');
const editItemTitle = document.getElementById('edit-todo-item-title');
const editItemConfirmButton = document.getElementById('edit-todo-item-confirm');
const editItemCancelButton = document.getElementById('edit-todo-item-cancel');

let itemToEdit = null;

// Event listeners on respective button clicks
editItemCancelButton.addEventListener('click', disableEditMode);
editItemConfirmButton.addEventListener('click', confirmEdit);
newItemAddButton.addEventListener('click', () => {
    const title = newItemTitle.value.trim();
    if (title) {
        addTodoItem(title);
        newItemTitle.value = '';
    }
});

// Event listeners on 'Enter' key press
newItemTitle.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const title = newItemTitle.value.trim();
        if (title) {
            addTodoItem(title);
            newItemTitle.value = '';
        }
    }
});
editItemTitle.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        confirmEdit();
    }
});

/**
 * Adds a new todo item to the todo list.
 *
 * @param {string} title - The title of the todo item.
 */
function addTodoItem(title) {
    const li = document.createElement('li');
    li.textContent = title;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.addEventListener('click', () => enableEditMode(li));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => { li.remove(); disableEditMode(); });

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
}

/**
 * Enable edit mode for the given item element
 * @param {HTMLElement} itemElement
 */
function enableEditMode(itemElement) {
    itemToEdit = itemElement;
    editItemTitle.value = itemElement.firstChild.textContent;
    newItem.hidden = true;
    editItem.hidden = false;
}

/**
 * Disable edit mode
 */
function disableEditMode() {
    itemToEdit = null;
    editItem.hidden = true;
    newItem.hidden = false;
}

/**
 * Confirms the edit of an item.
 * If there is an item to edit, updates its text content with the trimmed value from the edit input field,
 * and then disables the edit mode.
 */
function confirmEdit() {
    if (itemToEdit) {
        itemToEdit.firstChild.textContent = editItemTitle.value.trim();
        disableEditMode();
    }
}