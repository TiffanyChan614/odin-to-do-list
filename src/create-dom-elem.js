const createProjectList = (projectList, projects) => {
  for (let project of projects) {
    let li = document.createElement('li');
    li.textContent = project.getName();
    li.classList.add('project');
    li.id = `${project.getId()}`;
    projectList.appendChild(li);
  }
};

const addProjectBtns = (projectLi) => {
  let editBtn = document.createElement('button');
  editBtn.className = 'edit-project';
  editBtn.textContent = 'Edit';
  let clearBtn = document.createElement('button');
  clearBtn.className = 'clear-project';
  clearBtn.textContent = 'Clear';
  projectLi.appendChild(editBtn);
  projectLi.appendChild(clearBtn);
};

const createTodoList = (todoList, todos) => {
  for (let todo of todos) {
    let li = document.createElement('li');
    li.textContent = todo.getTitle();
    li.classList.add('todo');
    li.id = `${todo.getId()}`;
    todoList.appendChild(li);
  }
};

const addTodoCheck = (todoLi) => {
  let check = document.createElement('input');
  check.type = 'checkbox';
  check.className = 'check-todo';
  todoLi.insertBefore(check, todoLi.firstChild);
};

const addTodoBtns = (todoLi) => {
  let editBtn = document.createElement('button');
  editBtn.className = 'edit-todo';
  editBtn.textContent = 'Edit';
  let clearBtn = document.createElement('button');
  clearBtn.className = 'clear-todo';
  clearBtn.textContent = 'Clear';
  todoLi.appendChild(editBtn);
  todoLi.appendChild(clearBtn);
};

export default {
  createProjectList,
  addProjectBtns,
  createTodoList,
  addTodoCheck,
  addTodoBtns,
};
