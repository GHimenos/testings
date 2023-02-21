const task = document.querySelector("#task-content");
task.addEventListener("submit", formSerializer);
let printItems = document.querySelector(".js_printItems");
let delAll = document.querySelector(".reset");
delAll.addEventListener("click", delTodos);

let todosArr = [];
let newAdded = false;

renderTodos();

function formSerializer(event) {
  event.preventDefault();
  let input = new FormData(this);
  let output = Object.fromEntries(input);
  output.checked = "";
  todosArr.push(output);
  newAdded = true;
  renderTodos();
  task.reset();
}

function renderTodos() {
  printItems.innerHTML = "";
  if (newAdded) {
    storageReset();
    displayTodos(todosArr);
  } else {
    let newArr = JSON.parse(localStorage.getItem("todos"));
    !newArr ? (todosArr = []) : (todosArr = newArr);
    displayTodos(todosArr);
  }

  let tasks = document.querySelectorAll(".taskCard");
  let doneMarker = document.querySelectorAll(".js_doneTodo");

  if (tasks.length !== 0) {
    tasks.forEach((item) => {
      item.addEventListener("submit", deleteTodos);
    });

    doneMarker.forEach((item) => {
      item.addEventListener("change", markDone);
    });
  }
}

function displayTodos(arr) {
  arr.forEach((item) => {
    printItems.insertAdjacentHTML(
      "afterbegin",
      `
          <form action="#" class = 'taskCard'>
          <p>${item.title}</p> <br>
          <p>${item.description}</p><br> 
          <input name = "doneStatus" class = "js_doneTodo" type="checkbox" ${item.checked}> <span>Closed</span> <br>
          <input class = "js_delTodo" type="submit" value="Delete">
          </form>
      `
    );
  });
}

function delTodos(event) {
  event.preventDefault();
  todosArr = [];
  localStorage.clear();
  renderTodos();
}

function markDone(event) {
  event.preventDefault();
  updateTodos();
  storageReset();
  renderTodos();  
}

function deleteTodos(event) {
  event.preventDefault();
  this.remove();
  updateTodos();
  storageReset();
  renderTodos();
}

function storageReset() {
  localStorage.clear();
  localStorage.setItem("todos", JSON.stringify(todosArr));
  todosArr = JSON.parse(localStorage.getItem("todos"));
}

function updateTodos(){
  let updatedTodos = document.querySelectorAll(".taskCard");
  todosArr = [];
  updatedTodos.forEach((item) => {
    let checkStatus = false;
    if (item.children[4].checked === true) {
      checkStatus = "checked";
    }
    todosArr.push({
      title: `${item.children[0].innerText}`,
      description: `${item.children[1].innerText}`,
      checked: `${checkStatus}`
    });
  });
  todosArr.reverse();  
}
