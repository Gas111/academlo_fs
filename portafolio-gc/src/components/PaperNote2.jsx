import React, { useState } from 'react'
import "./styles/paperNote2.css"
import "./styles/animationFall.css"
const PaperNote2 = () => {

const [clickCardValue, setClickCardValue] = useState(false)

const handleClick = () => {
if(!clickCardValue)
  {setClickCardValue(true)
  console.log("click")
  }
}


  return (
    <div className={`tilting-card-wrapper ${clickCardValue && "item-fall"}`} onClick={handleClick}>
    <div className="mouse-position-tracker"></div>
    <div className="mouse-position-tracker"></div>
    <div className="mouse-position-tracker"></div>
    <div className="mouse-position-tracker"></div>
    <div className="mouse-position-tracker"></div>
    <div className="mouse-position-tracker"></div>
    <div className="mouse-position-tracker"></div>
    <div className="mouse-position-tracker"></div>
    <div className="mouse-position-tracker"></div>
    <div className="tilting-card-body">
      <h1 className='title-card'></h1>
      <p className='title-card__text'>About Me</p>
    </div>
  </div>
  )
}

export default PaperNote2