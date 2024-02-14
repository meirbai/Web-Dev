document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('taskInput');
    const tasksContainer = document.getElementById('tasks');

    todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      addTask(taskInput.value);
      taskInput.value = '';
    });

    function addTask(taskText) {
      const taskDiv = document.createElement('div');
      taskDiv.classList.add('todo-item');

      const checkbox = document.createElement('input');
      checkbox.classList.add('checkbox-btn');

      checkbox.type = 'checkbox';

      const taskTextElement = document.createElement('span');
      taskTextElement.innerText = taskText;

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      const deleteImage = document.createElement('img');
      deleteImage.src='https://cdn2.iconfinder.com/data/icons/thin-line-color-1/21/33-512.png';
      
      deleteBtn.appendChild(deleteImage);
      deleteBtn.addEventListener('click', function() {
        tasksContainer.removeChild(taskDiv);
      });

      checkbox.addEventListener('change',function(){
        if (checkbox.checked) {
            taskTextElement.classList.add('completed');
          } else {
            taskTextElement.classList.remove('completed');
          }
      });

      taskDiv.appendChild(checkbox);
      taskDiv.appendChild(taskTextElement);
      taskDiv.appendChild(deleteBtn);
      tasksContainer.appendChild(taskDiv);
    }
  });