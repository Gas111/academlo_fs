import React, { useState } from 'react'
import "../../styles/inputcheckbox.css"

const InputCheckbox = ({stateCheckbox, setStateCheckbox}) => {

  const [attributeCheckbox, setAttributeCheckbox] = useState("checkbox")

 

const handleChange=(e)=>{
 
  if(!stateCheckbox)
  {
  setAttributeCheckbox("checkbox box-checkbox-checked")
  setStateCheckbox(true)

  }
  else{
    setAttributeCheckbox("checkbox")
    setStateCheckbox(false)


  }

  

}

  return (
    <div className="element-checkbox"> 
    <span>Type</span> 
    <div className="box-checkbox">
     
      <input onClick={handleChange} className={attributeCheckbox} type="checkbox" name="" id="checkbox"/>
      <div className={stateCheckbox ? "circle":"circle circle-checked"}></div>
     
      </div>
       <span>Pokemon</span> 
      
      </div>
  )
}

export default InputCheckbox