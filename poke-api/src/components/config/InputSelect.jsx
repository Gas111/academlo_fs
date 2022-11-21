import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import '../../styles/inputSelect.css'
import {setCardsForPageGlobal} from "../../store/slices/cardsForPage.slice"


const InputSelect = () => {

const dispatch=useDispatch()

  const handleChangeSelect = (e) => {

dispatch(setCardsForPageGlobal(e.target.value))
  }

  return (
    <div>
      <select onChange={handleChangeSelect} className="input-select" name="">
        <option value="4"> 4 Cards</option>
        <option value="10">10 Cards</option>
        <option value="20">20 Cards</option>
      </select>
    </div>
  )
}

export default InputSelect
