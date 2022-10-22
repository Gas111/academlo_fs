import React, { useState } from 'react'

const PasswordInput = () => {

    const [isVisible, isVisibleState]=useState(false)


const handleVisibility=()=>{

    isVisibleState(!isVisible)

}



    return (
    <div>
        <h1>soy el componente password</h1>
        <input type={isVisible ? "text":"password"} />
        <button onClick={handleVisibility}>mostrar/ocultar contrasena</button>
        
    </div>
  )
}




export default PasswordInput