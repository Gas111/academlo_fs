import React, { useState } from 'react'

const Light = () => {
  const [background, stateBackground] = useState(false)


  const [background2, stateBackground2] = useState(false)
  // console.log(´${background}´);

  const handleLigth = () => {
    stateBackground(!background)
  }
  const handleLigth2 = () => {
    stateBackground2(!background2)
  }

  return (
    <div>
  <div
        className="round-box"
        style={{ background: background ? 'yellow' : 'white' }}
      >
        LUZx style
      </div>
      <button onClick={handleLigth}>Encender/apagar Luz</button>
      <br /> 
    
     
     <div className={`round-box ${background2 ? "on" : "off" }`}>LUZ x clase</div>
      <button onClick={handleLigth2}>Encender/apagar Luz</button>
    
    
    </div>
  )
}

export default Light
