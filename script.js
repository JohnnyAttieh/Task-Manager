
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add');
    const inputField = document.querySelector('input[type="text"]');
    const listContainer = document.getElementById('list-container');

    addButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();
        if (taskText) {
            addTask(taskText);
            inputField.value = '';
        }
    });

    listContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains('edit')) {
            const li = e.target.parentElement;
            const taskText = li.firstChild.textContent;
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.value = taskText;
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.classList.add('save');
            li.insertBefore(editInput, e.target);
            li.insertBefore(saveButton, e.target);
            li.removeChild(e.target);
        } else if (e.target.classList.contains('save')) {
            const li = e.target.parentElement;
            const editInput = li.querySelector('input[type="text"]');
            const taskText = editInput.value.trim();
            if (taskText) {
                li.firstChild.textContent = taskText;
                li.removeChild(editInput);
                li.removeChild(e.target);
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.classList.add('edit');
                li.appendChild(editButton);
            }
        } else if (e.target.tagName === 'LI') {
            e.target.classList.toggle('completed');
        }
    });

    function addTask(text) {
        const li = document.createElement('li');
        li.textContent = text;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        listContainer.appendChild(li);
    }
});
