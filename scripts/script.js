const todoList = document.querySelector('.todoList');
const todoArray = [{
  name: 'Kiss Muti',
  dueDate: '11-24-2025'
}, {
  name: 'do mb with Muti',
  dueDate: '11-25-2025'
}];

renderTodoList();

function renderTodoList() {
  let todoArrayHTML = '';

  for (let i = 0; i < todoArray.length; i++) {
    const todoObject = todoArray[i];
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoArray.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    `;
    todoArrayHTML += html;
  }
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