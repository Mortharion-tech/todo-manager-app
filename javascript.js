const listElement = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
const todos = [];

function updateTodosUI() {
    listElement.innerHTML = '';
    for (let todo of todos) {
        // <li><input type="checkbox"><span>New List Item</span></li>

        const span = document.createElement('span');
        span.innerText = todo.text;

        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.checked = todo.isCompleted;

        const todoLiElement = document.createElement('li');
        if (todo.isCompleted) {
            todoLiElement.classList.add('checked');
        }

        todoLiElement.append(checkbox);
        todoLiElement.append(span);
        listElement.append(todoLiElement);
    }
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoInput = document.getElementById('todo-text');

    if (!todoInput.value) {
        alert('You can not add an empty To-Do!');
        return;
    }

    todos.push({ text: todoInput.value, isCompleted: false });
    todoInput.value = '';
    updateTodosUI();
});