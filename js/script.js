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

    })
});
