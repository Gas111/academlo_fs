import { useState } from 'react'
import './App.css'
import quotes from '../src/json/quotes.json'
import QuoteBox from './assets/QuoteBox'

function App() {
  const arrayColor = [
    '#5EC279',
    '#00B497',
    '#00A1B0',
    '#008CBA',
    '#0074B2',
    '#515998',
  ]
  const [index, stateIndex] = useState(0)
  const [indexColor, stateColorIndex] = useState(0)

  const handleQuotes = () => {
    let indexQuotes = Math.floor(Math.random() * quotes.length)
    let indexColor = Math.floor(Math.random() * arrayColor.length)
    stateIndex(indexQuotes)
    stateColorIndex(indexColor)
  }

  const objbackground = {
    background: arrayColor[indexColor],
    color: arrayColor[indexColor],
  }

  return (
    <main>
      <div className="App" style={objbackground}>
        {/* for style i need insert objects */}
        <QuoteBox
          index={index}
          handleQuotes={handleQuotes}
          color={arrayColor[indexColor]}
        />
        {/* for componentes i need pass functions or usestates */}
      </div>
      <footer style={{ background: arrayColor[indexColor] }}>
        <p>Made by Gaston Colque</p>
      </footer>
    </main>
  )
}

export default App
