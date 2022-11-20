import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = ({navigateTo}) => {
    const navigate = useNavigate()
    const handleClickBack = () => {
        navigate(navigateTo)
      }


  return (
    <header className="header">
    <i
      onClick={handleClickBack}
      className="fa-solid fa-arrow-left-long"
    ></i>
  </header>
  )
  }
export default BackButton