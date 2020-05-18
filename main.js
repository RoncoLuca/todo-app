const buttonAdd       = document.querySelector('#button-add')
const buttonDelete    = document.querySelector('#button-delete')
const output          = document.querySelector('#output')
const inputTodo       = document.querySelector('#input-todo')
const outputContainer = document.querySelector('#output-container')

function addOutputContent() {
    outputContainer.style.display = 'block'
    let newTodo = document.createElement('div')
    newTodo.setAttribute('class', 'todo')
    let textInside = document.createElement('span')
    textInside.setAttribute('class', 'inner-text')
    textInside.innerText = inputTodo.value
    newTodo.appendChild(textInside)
    let deleteButton = document.createElement('span')
    deleteButton.setAttribute('class', 'delete-button')
    deleteButton.innerText = 'X'
    newTodo.appendChild(deleteButton)
    /* newTodo.addEventListener('dblclick', function(e) {
        e.target.classList.add('remove')
    }) */
    /* newTodo.addEventListener('click', function(e) {
        e.target.classList.toggle('done')
    }) */
    deleteButton.addEventListener('click', function(e) {
        newTodo.remove()
        let todoCounter = document.querySelectorAll('.todo').length;
        // Qui andremo ad utilizzare il metodo if
        if (todoCounter === 0) {
            // Qua posso inserire la mia istuzione per eliminare output-container
            outputContainer.style.display = 'none'
            console.log("Devo eliminare l'element output-container")
        } else {
            console.log("C'è più di un todo, non devo eliminare output-container")
        }
        
    })

    output.appendChild(newTodo)
    inputTodo.value = ''
}

function deleteOutputContent() {
    outputContainer.style.display = 'none'
    output.innerText = ''
}

buttonAdd.addEventListener('click', addOutputContent)

buttonDelete.addEventListener('click', deleteOutputContent)

if (output.children.length === 0) {
    outputContainer.style.display = 'none'
}