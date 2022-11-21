import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../../styles/backButton.css"

const BackButton = ({ navigateTo }) => {
  const navigate = useNavigate()
  const handleClickBack = () => {
    navigate(navigateTo)
  }

  return (
    <nav className="header">
      <div className="back-button">
      <i onClick={handleClickBack} className="fa-solid fa-arrow-left-long"></i>
   </div> </nav>
  )
}
export default BackButton
