const listElement = document.getElementById('todo-list');
const todoForm = document.getElementById('todo-form');
const clearAll = document.getElementById('clear-all');
let removeButton;
let todos = [];

//  update task list
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

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.dataset.todoId = todo.id;
        removeButton.classList.add('remove-button');
//        removeButtonList = document.querySelectorAll('.remove-button');
        

        const todoLiElement = document.createElement('li');
        if (todo.isCompleted) {
            todoLiElement.classList.add('checked');
        }

        removeButton.addEventListener('click', () => {
            console.log(removeButton.dataset.todoId);
            console.log(todos);
            todos = todos.filter(task=> task.id != removeButton.dataset.todoId);
            console.log(todos);
            listElement.removeChild(todoLiElement);
        });

        todoLiElement.append(checkbox);
        todoLiElement.append(span);
        todoLiElement.append(removeButton);

        /* todoLiElement.querySelectorAll('.remove-button').addEventListener('click', function() {
            console.log('works');
        }); */

        listElement.append(todoLiElement);
    }
}

//  check/uncheck task
listElement.addEventListener('click', (event) => {
    if (event.target.matches('input.checkbox')) {
        const todoIndex = todos.findIndex(todo => todo.id == event.target.dataset.todoId);
        todos[todoIndex] = { ...todos[todoIndex], isCompleted: event.target.checked};
        event.target.parentElement.classList.toggle('checked');
    }
});

//  add new task
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

//  clear all tasks
clearAll.addEventListener('click', (event) => {
    listElement.innerHTML = '';
    todos.length = 0;
});

/* if (removeButton) removeButton.addEventListener('click', (event) => {
    console.log('yea');
}); */