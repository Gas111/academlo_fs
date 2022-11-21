import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon404 = () => {
  return (

    <>
    <h1>Pokemon not found error 404</h1>
    <br />
    <Link to="/pokedex">Return to previos page</Link>
    </>
 
    )
}

export default Pokemon404