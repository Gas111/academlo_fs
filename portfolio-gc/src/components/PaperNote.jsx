import React, { useState } from 'react'
import "./styles/paperNote.css"
import "./styles/animationFall.css"

const PaperNote = ({color,degree,text}) => {

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
    {/* <div className="card-pin"><img className='card-pin-image' src={`../assets/img/redPin.png`} alt="pin image" /></div> */}
   
   
    <div className={`tilting-card-body ${color} ${degree}`}>
      <h1 className='title-card'></h1>
      <p className='title-card__text'>{text}</p>
    </div>
  </div>
  )
}

export default PaperNote