console.log("js file is connected and running");


const TypeButton = document.querySelector(".Type-of-Notes");
const PriorityButton = document.querySelector(".Priority-Level");
const luckyNumberElement = document.getElementById('lucky-num');
const form = document.querySelector('.todo-form')
const todoInput = document.querySelector('.todo-form input');
const todoContainer = document.querySelector('.todo-container');









form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valueFromInput = todoInput.value;
    console.log(valueFromInput);
    
    const divContainer = document.createElement('div')
    divContainer.classList = "single-todo"

    const  myInput = document.createElement('input')
    myInput.type = "checkbox"

    divContainer.appendChild(myInput)

    
    const  pTag = document.createElement('p')
    pTag.textContent = valueFromInput

    const  closeButton = document.createElement('div')
    closeButton.classList = "close"
    closeButton.textContent = "X"
    closeButton.addEventListener('click', (e) => {
        console.log("you clicked a button!");
        console.log(e.target);
        todoContainer.removeChild(divContainer)
    })

    divContainer.appendChild(pTag)
    divContainer.appendChild(closeButton)


    // const newTodoElement = document.createElement('li');
    // put the value as the text content
    newTodoElement.textContent = valueFromInput;
    //  PUT INSIDE the container
    // todoContainer.appendChild(newTodoElement)

    todoContainer.appendChild(divContainer)
    todoInput.value = "";
})