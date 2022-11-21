import React, { useState } from 'react'
import '../../styles/inputcheckbox.css'

const InputCheckbox = ({ setStateCheckbox }) => {
  const [attributeCheckbox, setAttributeCheckbox] = useState('checkbox')
  
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    if (!checked) {
      setAttributeCheckbox('checkbox box-checkbox-checked')
      setStateCheckbox(true)
      setChecked(true)
    } else {
      setAttributeCheckbox('checkbox')
      setStateCheckbox(false)
      setChecked(false)
    }
  }

  return (
    
   
      <div className="box-checkbox">
        <input
          onClick={handleChange}
          className={attributeCheckbox}
          type="checkbox"
          name=""
          id="checkbox"
        />
        <div className={checked ? 'circle' : 'circle circle-checked'}></div>
      </div>
      
   
  )
}

export default InputCheckbox
