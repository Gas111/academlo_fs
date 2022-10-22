import React from 'react'

const CardProps = ({title,color}) => {
  

  
  const objectColor={

color:"white",
backgroundColor: color,
  }
  
    return (
    <div style={objectColor}>{title}</div>
  )

}

export default CardProps