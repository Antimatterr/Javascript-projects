//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)

//function
function addTodo(event){
  //prevent form from submitting
  event.preventDefault();

  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo')

  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  
  //check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML='<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

  //check delete button
   const trashButton = document.createElement('button');
   trashButton.innerHTML='<i class="fas fa-trash"></i>';
   trashButton.classList.add('trash-btn');
   todoDiv.appendChild(trashButton);
   
   //apppemd to list
   todoList.appendChild(todoDiv);

   //cleare todoInput value
   todoInput.value="";
}

function deleteCheck(e){
  const item = e.target;
  //delete
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    //animation of delete
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
  }

  //check mark
  if(item.classList[0] === 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
}
}

function filterTodo(e){
  const todos = todoList.childNodes;
  for(var i=1;i<todos.length;i++){
    
    switch(e.target.value){
      case "all":
        todos[i].style.display = "flex";
        break;
      case "completed":
        if(todos[i].classList.contains("completed")){
          todos[i].style.display = "flex";
        }
        else{
          todos[i].style.display = "none";
        }
        break;
        case "uncompleted":
          if(!todos[i].classList.contains("completed")){
            todos[i].style.display="flex";
          }
          else{
            todos[i].style.display = "none";
          }
    }
  }
}
function saveLocalTodos(todo){
  //check if there is already something
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }
}















