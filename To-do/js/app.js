// definicion de variables
const buttonInsert = document.querySelector('.button-primary')
const tasktTitle = document.querySelector("[name='name']")
const tasktDescription = document.querySelector("[name='description']")
const area = document.querySelector('.task-containers')

let taskArray = []
let id = 0
// leo los valores en el localstorage
const recovery = JSON.parse(localStorage.getItem('task')) || [] //devuelve el primer verdadero o el ultimo falso.

taskArray = [...recovery]
const elements = convertArrayToElements()
createTask(elements)

buttonInsert.addEventListener('click', (e) => {
  // console.log(e.target.parentElement.previousSibling.firstElementChild.lastElementChild.value)
  const title = tasktTitle.value
  const description = tasktDescription.value

  if (!title || !description) {
    alert('complete los campos')
return  
}
  taskArray.push({ id, title, description, completed: false }) //esto es un shorthand seria title:title
  cleanInputs()
  const elements = convertArrayToElements()
  createTask(elements)
  storageTask()
  id++
})

function createTask(elements) {
  area.innerHTML = elements
}

function cleanInputs() {
  tasktDescription.value = ''
  tasktTitle.value = ''
}

function storageTask() {
  localStorage.setItem('task', JSON.stringify(taskArray))
}

function convertArrayToElements() {
  const elements = taskArray.map((task) => {
    return `
    <div class="task-container ${task.completed ? 'complete' : ''}">
    <div class="task-container__description">
        <h3>${task.title}
        </h3>
        <p>${task.description}</p>
    </div>
    <div class="task-container__buttons">
        <button class="btn-complete ${task.completed ? 'hidde' : ''}" id=${task.id}>Complete</button>
        <button class="btn-delete" id=${task.id}>Delete</button>
    </div>
    </div>`
  })
  return elements
}

area.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-complete')) {
    completeTask(e.target.getAttribute('id'))
    // e.target.style.display = 'none'
  }
  if (e.target.classList.contains('btn-delete'))
    deleteTask(e.target.getAttribute('id'))
})

function completeTask(idtask) {
  const indexTask = taskArray.findIndex((task) => task.id == idtask)
  taskArray[indexTask].completed = true
  console.log(taskArray)
  const elements = convertArrayToElements()
  createTask(elements)
  storageTask()
}

function deleteTask(idtask) {
  const indexTask = taskArray.findIndex((task) => task.id == idtask)
  console.log(indexTask)
  taskArray.splice(indexTask, 1)
  const elements = convertArrayToElements()
  createTask(elements)
  storageTask()
}


