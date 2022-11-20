import React, { useState } from 'react'
import "../../styles/inputcheckbox.css"

const InputCheckbox = () => {

  const [attributeCheckbox, setAttributeCheckbox] = useState("checkbox")

  const [stateCheckbox, setStateCheckbox] = useState(false)

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
    <div className="box-checkbox">
      <input onClick={handleChange} className={ attributeCheckbox} type="checkbox" name="" id="checkbox"/>
      <div className={stateCheckbox ? "circle":"circle circle-checked"}></div>

      </div>
  )
}

export default InputCheckbox