window.addEventListener('load', () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');

    const username = localStorage.getItem('username') || '';
    nameInput.value = username;
    nameInput.addEventListener('change', evt => {
        localStorage.setItem('username', evt.target.value);
    });

    newTodoForm.addEventListener('submit', evt => {
        evt.preventDefault();

        const todo = {
            content: evt.target.elements.content.value,
            category: evt.target.elements.category.value,
            done: false,
            createdAt: new Date().getTime()
        }

        todos.push(todo);

        localStorage.setItem('todos',JSON.stringify(todos));

        evt.target.reset();

        DisplayTodos();

    });
    DisplayTodos();
});

function DisplayTodos() {

    const todoList = document.querySelector('#todo-list');

    todoList.innerHTML='';

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item')

        const label = document.createElement('label');
        const input = document.createElement('input');
        const span  = document.createElement('span');
        const content  = document.createElement('div');
        const actions  = document.createElement('div');
        const edit  = document.createElement('button');
        const deleteBtn  = document.createElement('button');

        input.type  = 'checkbox';
        input.checked=todo.done;
        span.classList.add('bubble');


        if(todo.category == 'personal'){
            span.classList.add('personal')
        }else {
            span.classList.add('studies')
        }

        content.classList.add('todo-content');
        actions.classList.add('actions');
        edit.classList.add('edit');
        deleteBtn.classList.add('delete');

        content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
        edit.innerHTML = 'Edit';
        deleteBtn.innerHTML = 'Delete';

        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(edit);
        actions.appendChild(deleteBtn);
        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);
        todoList.appendChild(todoItem);

        if (todo.done){
            todoItem.classList.add('done')
        }

        input.addEventListener('click',ev => {
            todo.done  = ev.target.checked;
            localStorage.setItem('todos',JSON.stringify(todos));

            if (todo.done) {
                todoItem.classList.add('done');
            }else {
                todoItem.classList.remove('done');
            }
            DisplayTodos();
        });
    });
}