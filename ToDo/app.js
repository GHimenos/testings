const task = document.querySelector('#task-content');

task.addEventListener('submit', formSerializer);

function formSerializer(event){

    event.preventDefault();
    let values = this.elements;
    values=Array.from(values);
    
    values.forEach((val)=>
        console.log(key)
    )
}   
