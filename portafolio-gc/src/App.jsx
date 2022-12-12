import './App.css'
import PaperNote2 from './components/PaperNote2'
import "./fonts/tiza.woff"

function App() {
  return (
    <div className="App">
      {/* <img className='backgroud' src="" alt="" /> */}
      <PaperNote2 color={"yellow"}/>
      <PaperNote2 color={"green"}/>
      <PaperNote2 color={"blue"}/>
      <PaperNote2 color={"pink"}/>
      <p>Im Gaston</p>
    </div>
  )
}

export default App
