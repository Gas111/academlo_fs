import './assets/styles/style.css'
import Card from './assets/components/card'
import CardProps from './assets/components/CardProps'
import CardHobbies from './assets/components/CardHobbies'
import { useState } from 'react'
import PasswordInput from './assets/components/PasswordInput'
import Light from './assets/components/Light'
import Lights from './assets/components/Lights'

let cont = 0

function App() {
  const [number, setNumber] = useState(0)
  // setNumber sirve para cambiarle el valor

  // con let pierde rendimiento.

  const increment = () => {
    setNumber(number + 1)
    console.log(number)
  }

  let [numberPlus, setNumberPlus] = useState(0)

  const incrementPlus = () => {
    setNumberPlus(++numberPlus)
    console.log(numberPlus)
  }

  const [text, setText] = useState('pa el culo')

  const changeText = () => {
    setText('ahora bien')
    cont++
    if (cont % 2) {
      setText('pa el culo')
    }
    console.log(cont)
  }

  // EJERCICIO DE LAS 3 LUCES.

  const [value, valueState] = useState(true)

  const handleValue = () => {
    console.log(value)
    valueState(!value)
  }

  return (
    <main className="App">
      <h1>Numero 1--{number}</h1>
      <button onClick={increment}>Increment</button>

      <h1>Numero 2--{numberPlus}</h1>
      <button onClick={incrementPlus}>Increment2</button>

      <h1>Hoy me siento {text}</h1>
      <button onClick={changeText}>Increment2</button>

      <PasswordInput />

      <Lights prop={value} prop2={handleValue} />

      <Lights prop={value} prop2={handleValue} />

      <Lights prop={value} prop2={handleValue} />

      <Light />
    </main>
  )
}

export default App
