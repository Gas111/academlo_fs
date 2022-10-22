import React from 'react'
// import { useState } from 'react'


const Lights = ({prop, prop2}) => {


  return (
    <div>
          <div className="round-box" style={{ background: prop ? 'yellow' : 'white' }}>LUZ
      </div>
      <button onClick={prop2}>Encender/apagarLuz</button>
      <br />
    </div>
  )
}

export default Lights