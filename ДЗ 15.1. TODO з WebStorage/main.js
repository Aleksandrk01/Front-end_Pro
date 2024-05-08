document.addEventListener('DOMContentLoaded', function() {
    let form__btn = document.querySelector('.form__btn');
    let inputForm = document.querySelector('.js--form__input'); 
    let todoItem = document.querySelector('.js--todos-wrapper');
    let todos = JSON.parse(localStorage.getItem('todos')) || [];

    function updateLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    let newTodoList = function() {
        let valueInput = inputForm.value; 
        let inputError = document.getElementById('inputError');
        if (valueInput !== "") {
            let newSpan = document.createElement('span');    
            let newItem = document.createElement('li');
            let newCheckbox = document.createElement('input');
            let newButton = document.createElement('button');

            newItem.className = 'todo-item';
            newSpan.textContent = valueInput;
            newSpan.className = 'todo-item__description';

            newCheckbox.type = 'checkbox';
            newCheckbox.className = 'checkbox_active';

            newButton.textContent = 'Видалити';
            newButton.className = 'todo-item__delete';

            newItem.appendChild(newCheckbox);
            newItem.appendChild(newSpan);
            newItem.appendChild(newButton);
            todoItem.appendChild(newItem);

            let todoData = {
                text: valueInput,
                checked: newCheckbox.checked
            };
            todos.push(todoData);
            updateLocalStorage();

            newButton.addEventListener('click', function() {
                const index = todos.indexOf(todoData);
                if (index > -1) {
                    todos.splice(index, 1);
                    updateLocalStorage(); 
                }
                newItem.remove();
            });
        
            newCheckbox.addEventListener('change', function() {
                todoData.checked = newCheckbox.checked;
                newItem.className = newCheckbox.checked ? 'todo-item todo-item--checked' : 'todo-item';
                updateLocalStorage();
            });
            
            inputError.style.display = 'none';
            console.log(todos);
        } else {
            inputError.textContent = 'Введите задачу';
            inputError.style.color = 'red';
        }
    };

    form__btn.addEventListener('click', function(event) {
        event.preventDefault();
        newTodoList();
    });

    todos.forEach(todoData => {
        let newSpan = document.createElement('span');    
        let newItem = document.createElement('li');
        let newCheckbox = document.createElement('input');
        let newButton = document.createElement('button');

        newItem.className = todoData.checked ? 'todo-item todo-item--checked' : 'todo-item';
        newSpan.textContent = todoData.text;
        newSpan.className = 'todo-item__description';

        newCheckbox.type = 'checkbox';
        newCheckbox.className = 'checkbox_active';
        newCheckbox.checked = todoData.checked;

        newButton.textContent = 'Видалити';
        newButton.className = 'todo-item__delete';

        newItem.appendChild(newCheckbox);
        newItem.appendChild(newSpan);
        newItem.appendChild(newButton);
        todoItem.appendChild(newItem);

        newButton.addEventListener('click', function() {
            const index = todos.indexOf(todoData);
            if (index > -1) {
                todos.splice(index, 1);
                updateLocalStorage(); 
            }
            newItem.remove();
        });
    
        newCheckbox.addEventListener('change', function() {
            todoData.checked = newCheckbox.checked;
            newItem.className = newCheckbox.checked ? 'todo-item todo-item--checked' : 'todo-item';
            updateLocalStorage();
        });
    });
});
