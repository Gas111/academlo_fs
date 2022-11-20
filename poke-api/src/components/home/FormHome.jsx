import React from 'react'
import {useDispatch} from "react-redux" 
import { useNavigate } from 'react-router-dom'
import {setUserNameGlobal} from "../../store/slices/username.slice"

const FormHome = () => {

const dispatch=useDispatch()
const navigate=useNavigate()

const handleSubmit=(e)=>{
e.preventDefault()
dispatch(setUserNameGlobal(e.target.input.value.trim()))

navigate("/pokedex")


}


  return (
    <form onSubmit={handleSubmit}>
        <input className='first-box__input' type="text" id="input" />
        <button className="first-box__button"><i className="fa-solid fa-paper-plane"></i></button>
    </form>
  )
}

export default FormHome