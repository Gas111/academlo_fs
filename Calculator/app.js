// -- ELEMENTS AND NODES
const keys = document.querySelectorAll('.key')
const display = document.querySelector('.display')
const smallDisplay = document.querySelector('.small-display')

let keyPressed = ''
let arrayKeysPressed = []
let number = ''
let stringKeysPressed = ''
let arrayOperators = []
// let stringKeysPressedMomentStorage=""
let keyPresseEqual = false

display.innerHTML = '0'
smallDisplay.innerHTML = '_'

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', (e) => {
    keys[i].classList.add('pressed')
    keyPressed = e.target.textContent
    keyPressed = functionspecialkeypressed(keyPressed, display)

    if (keyPressed !== 'special') {
      // keyPressed = keyPressed + e.target.textContent

      if (keyPresseEqual) {
        arrayKeysPressed = []
        keyPresseEqual = false
      }
      if (arrayKeysPressed.length < 10) {
        arrayKeysPressed.push(keyPressed)
        stringKeysPressed = arrayKeysPressed.join('')
        display.innerHTML = stringKeysPressed
      }
    }
  })
  // aca se acaba la transicion
  keys[i].addEventListener('transitionend', () => {
    if (keys[i].classList.contains('pressed')) {
      keys[i].classList.remove('pressed')
    }
  })
}

function functionspecialkeypressed(keyPressed, display) {
  if (
    keyPressed === '+' ||
    keyPressed === '-' ||
    keyPressed === '/' ||
    keyPressed === '*'
  ) {
    if (arrayOperators.length === 0) {
      arrayOperators.push(Number(stringKeysPressed))
      arrayOperators.push(keyPressed)
      console.log(arrayOperators)
    }
    cleanData()
    keyPressed = 'special'
  }

  if (keyPressed === 'AC') {
    cleanOperatos()
    cleanData()
    cleanDisplay()
    cleanSmallDisplay()
    keyPressed = 'special'
  }

  if (keyPressed === '*') {
    cleanData()
    keyPressed = 'special'
  }

  if (keyPressed === '=' && arrayOperators.length === 2) {
    arrayOperators.push(Number(stringKeysPressed))

    operationInArray()

    arrayOperators = []
    keyPresseEqual = true
    keyPressed = 'special'
  } else if (keyPressed === '=' && arrayOperators.length === 0) {
    cleanOperatos()
    cleanData()
    cleanDisplay()
    keyPressed = 'special'
  }

  if (keyPressed === '+') {
    arrayOperators.push(Number(stringKeysPressed))
    cleanData()
    keyPressed = 'special'
  }

  if (keyPressed === '/') {
    //
    cleanData()
    keyPressed = 'special'
  }

  return keyPressed
}

//detectar la tecla q se presiono.
function cleanData() {
  arrayKeysPressed = []
  stringKeysPressed = ''
}
function cleanDisplay() {
  display.innerHTML = '0'
}

function cleanSmallDisplay() {
  smallDisplay.innerHTML = '_'
}

function cleanOperatos() {
  arrayOperators = []
}

function operationInArray() {
  const operators = ['+', '*', '-', '/']
  let equal = 0
  for (let operator of operators) {
    if (arrayOperators[1] === operator) {
      equal = eval(arrayOperators[0] + operator + arrayOperators[2])

      const numberWithExp = convertInExp(arrayOperators[0])
      const numberWithExp2 = convertInExp(arrayOperators[2])
      const stringEqual = numberWithExp + operator + numberWithExp2
      // const stringEqual = arrayOperators[0] + operator + arrayOperators[2]

      smallDisplay.innerHTML = stringEqual

      display.innerHTML = equal
      stringKeysPressed = equal
      // stringKeysPressed=""
    }
  }

  const equalWithExp = convertInExp(equal)
  display.innerHTML = equalWithExp
}

function convertInExp(equal) {
  let value = equal
  if (equal > 1000000) {
    let equalReduce = equal
    let equalExp = 0

    while (equalReduce > 100) {
      equalReduce = equalReduce / 10
      equalExp++
    }
    equalReduce = equalReduce.toFixed(2)
    value = `${equalReduce} e${equalExp}`

    // stringKeysPressed =`${equalReduce} e${equalExp}`
  }

  return value
}
