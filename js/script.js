
window.addEventListener('load',() => {
    todos  = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const nameTodoForm = document.querySelector('#new-todo-form');

    const username =localStorage.getItem('username') || '';
    nameInput.value=username;
    nameInput.addEventListener('change',evt => {
        localStorage.setItem('username',evt.target.value);
    })
});
