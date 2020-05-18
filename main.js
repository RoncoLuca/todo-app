const buttonAdd       = document.querySelector('#button-add')
const buttonDelete    = document.querySelector('#button-delete')
const output          = document.querySelector('#output')
const inputTodo       = document.querySelector('#input-todo')
const outputContainer = document.querySelector('#output-container')

function addOutputContent() {
    outputContainer.style.display = 'block'
    let newTodo = document.createElement('div')
    newTodo.setAttribute('class', 'todo')
    newTodo.innerText = inputTodo.value
    newTodo.addEventListener('dblclick', function(e) {
        e.target.classList.add('remove')
    })
    newTodo.addEventListener('click', function(e) {
        e.target.classList.toggle('done')
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