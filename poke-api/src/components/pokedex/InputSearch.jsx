import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/home.css"
const InputSearch = () => {

  const navigate=useNavigate()

const handleSubmit=(e)=>{
  e.preventDefault()


  navigate(`/pokedex/${e.target.inputSearch.value}`)
}

  return (
      <form onSubmit={handleSubmit} action="">
        <input className="input-search" type="text" name="" id="inputSearch" />
      </form>
  )
}



export default InputSearch