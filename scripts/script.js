const todoList = document.querySelector('.todoList');
const todoArray = [];

renderTodoList();

function renderTodoList() {
  let todoArrayHTML = '';

  for (let i = 0; i < todoArray.length; i++) {
    const todo = todoArray[i];
    const html = `
        <p>
          ${todo} 
          <button onclick="
            todoArray.splice(${i}, 1);
            renderTodoList();
          ">Delete</button>
        </p>
          `;
    todoArrayHTML += html;
  }
  console.log(todoArrayHTML);
  todoList.innerHTML = todoArrayHTML;
}

function addTodo() {
  const todoInput = document.querySelector('.todo-input');
  const inputValue = todoInput.value;

  if (inputValue === '**clearAll**') {
    todoArray = [];
    console.log(todoArray);
  } else {
    todoArray.push(inputValue);
    console.log(todoArray);
  }

  todoInput.value = '';

  renderTodoList();
}

function addTodoOnEnter() {
  if (event.key === 'Enter') {
    addTodo();
  }
}