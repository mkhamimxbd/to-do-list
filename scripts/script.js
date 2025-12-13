const todoList = document.querySelector('.todoList');
const todoArray = [];

renderTodoList();

function renderTodoList() {
  let todoArrayHTML = '';

  todoArray.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-btn"
        onclick="
          todoArray.splice(${index}, 1);
          renderTodoList();
      ">Delete</button>
    `;
    todoArrayHTML += html;
  });

  todoList.innerHTML = todoArrayHTML;
}

function addTodo() {
  const todoInput = document.querySelector('.todo-input');
  const dueDateInput = document.querySelector('.due-date-input');
  const dueDate = dueDateInput.value;
  const name = todoInput.value;

  todoArray.push({
    name,
    dueDate
  });

  todoInput.value = '';

  renderTodoList();
}

function addTodoOnEnter() {
  if (event.key === 'Enter') {
    addTodo();
  }
}