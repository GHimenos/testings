//Todo Хард-код - если таких штук много - можно обойти циклом

const task = document.querySelector("#task-content");
task.addEventListener("submit", formSerializer);

//Todo ===Конец===Хард-код===================================

let todosArr =[];
let newAdded = false;

renderTodos();
displayTodos(todosArr);

//*модуль/метод==============================================

function formSerializer(event) {
  event.preventDefault();
  let input = new FormData(this);
  let output = Object.fromEntries(input);
  todosArr.push(output);
  newAdded = true;
  console.log(newAdded);//*проверка
  renderTodos();
  displayTodos(todosArr);
  task.reset();
}

//*модуль/метод==============================================

function renderTodos(){

    if(newAdded){

        console.log('works with true value');//*проверка
        console.log(todosArr);//*проверка
        localStorage.clear();
        localStorage.setItem('todos', JSON.stringify(todosArr));
        todosArr= JSON.parse(localStorage.getItem('todos'));
        console.log(todosArr);//*проверка
    }
    else{
        console.log('works with false value');//*проверка
        let newArr= JSON.parse(localStorage.getItem('todos'));
        !newArr ? todosArr=[] : todosArr=newArr;
        console.log(todosArr);//*проверка
    }

}

//*модуль/метод==============================================

function displayTodos(arr){

    let printItems = document.querySelector('.js_printItems');
    printItems.innerHTML='';

    arr.forEach(item=>{

        printItems.insertAdjacentHTML('afterbegin', `
        <div class = 'taskCard'>
        <p>${item.title}</p>
        <p>${item.description}</p>
        <button>Delete</button>
        </div>
        `);
    });

}

//*модуль/метод==============================================

function deleteTodo(){
    let printed = document.querySelector('.js_printItems');
    console.log(printed); //*проверка
    
}
