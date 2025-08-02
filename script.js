const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const taskList = document.getElementById('task-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = todoInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        todoInput.value = '';
        todoInput.focus();
    }
});

function addTask(text) {
 const li = document.createElement('li');

 const taskSpan = document.createElement('span');
    taskSpan.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

}

taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const taskItem = event.target.parentElement;
        taskList.removeChild(taskItem);
    }
});