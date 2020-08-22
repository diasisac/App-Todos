  var ListElement = document.querySelector('#app ul');
  var inputElement = document.querySelector('#app input');
  var buttonElement = document.querySelector('#app button');

  var todos = JSON.parse(localStorage.getItem('list_todos'))||[];

  function renderTodos() {
    ListElement.innerHTML = '';
    for (todo of todos){
      todoElemnt = document.createElement('li');
      todoText = document.createTextNode(todo);
      
      todoElemnt.appendChild(todoText); 
      ListElement.appendChild(todoElemnt);
      
      var linkElement = document.createElement('a');
      linkElement.setAttribute('href','#');

      var pos = todos.indexOf(todo);
      linkElement.setAttribute('onclick','deleteTodos('+pos+')' );

      var linkElementText = document.createTextNode('Excluir');
      linkElement.appendChild(linkElementText);
      todoElemnt.appendChild(linkElement);
    }
  }
renderTodos();

function addTodo() {
    todos.push(inputElement.value);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodos(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage(){
 localStorage.setItem('list_todos',JSON.stringify(todos));
}