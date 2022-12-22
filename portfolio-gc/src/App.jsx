import './App.css'
import PaperNote from './components/PaperNote'
import "./fonts/tiza.woff"
import "../src/components/styles/animationWrite.css"

function App() {
  return (
    <div className="App">
      <div class="typewriter">
  <h1>Im Gaston Web Developer</h1>
  
</div>
<div class="typewriter2">
  <h2>Im Gaston Web Developer</h2>

</div>
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
