const listElement = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
const clearAll = document.getElementById('clear-all');
let removeButton;
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
        checkbox.dataset.todoId = todo.id;
        checkbox.classList.add('checkbox');

        const button = document.createElement('button');
        button.innerHTML = 'Remove';
        button.dataset.todoId = todo.id;
        button.classList.add('remove-button');
        removeButton = document.querySelectorAll('.remove-button');

        const todoLiElement = document.createElement('li');
        if (todo.isCompleted) {
            todoLiElement.classList.add('checked');
        }

        todoLiElement.append(checkbox);
        todoLiElement.append(span);
        todoLiElement.append(button);
        listElement.append(todoLiElement);
    }
}

listElement.addEventListener('click', (event) => {
    if (event.target.matches('input.checkbox')) {
        const todoIndex = todos.findIndex(todo => todo.id == event.target.dataset.todoId);
        todos[todoIndex] = { ...todos[todoIndex], isCompleted: event.target.checked};
        event.target.parentElement.classList.toggle('checked');
    }
});

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoInput = document.getElementById('todo-text');

    if (!todoInput.value) {
        alert('You can not add an empty To-Do!');
        return;
    }

    todos.push({ id: Date.now(), text: todoInput.value, isCompleted: false });
    todoInput.value = '';
    updateTodosUI();
});

clearAll.addEventListener('click', (event) => {
    listElement.innerHTML = '';
    todos.length = 0;
});

removeButton.addEventListener('click', (event) => {
    
})