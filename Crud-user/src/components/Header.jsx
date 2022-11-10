import React from 'react'
import "../styles/header.css"

const Header = ({setFormVisible}) => {

const handleForm=()=>{

setFormVisible(true)

}

  return (
    <header className="header">
      <h1>Usuarios</h1>

      <button onClick={handleForm} className="button-create-new">Create New</button>
    </header>
  )
}

export default Header
