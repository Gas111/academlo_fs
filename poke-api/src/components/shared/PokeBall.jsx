import React from 'react'
import '../../styles/pokeball.css'

const PokeBall = () => {
  return (
    <div className="poke-ball">
      <div className="external-circle-red"></div>
      <div className="external-circle">
        <div className="line"></div>
        <div className="internal-circle">
          <div className="external-circle-small">
            <div className="circle-button"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokeBall
