import React from 'react'
import "../styles/button-pages.css"

const ButtonPages = ({quantityResidents}) => {
  


  const paintButtons=()=>{

  const quantityPages=parseInt(quantityResidents/10)
    return(
      
        <div className='single-button-pages'>{quantityPages}</div>
    )

  }
  
    return (
      <div>{paintButtons()}</div>
      
  
  )
}

export default ButtonPages