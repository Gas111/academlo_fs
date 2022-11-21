import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/configButton.css"



const ButtonConfig = () => {

 const navigate= useNavigate()


const handleClick=()=>{

navigate('/config/')

}


  return (
    <div className="config-button" onClick={handleClick}><i className="fa-solid fa-gear"></i></div>
  )
}

export default ButtonConfig