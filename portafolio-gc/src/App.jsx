import './App.css'
import PaperNote from './components/PaperNote'
import "./fonts/tiza.woff"

function App() {
  return (
    <div className="App">
      <div className="card-pin"><div className="card-pin-image"></div></div>
      <PaperNote color={"yellow"} degree={"deg5"} text={"About Me"}/>
      <div className="card-pin"><div className="card-pin-image"></div></div>
      <PaperNote color={"green"} degree={"deg-5"} text={"Tecnologies"}/>
      <div className="card-pin"><div className="card-pin-image"></div></div>
      <PaperNote color={"blue"} degree={"deg3"} text={"Porfolio"}/>
      <div className="card-pin"><div className="card-pin-image"></div></div>
      <PaperNote color={"pink"} degree={"deg-7"} text={"xxxx"}/>
      <p>Im Gaston</p>
    </div>
  )
}

export default App
