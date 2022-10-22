import React from 'react'

const Button = ({ handleQuotes, color }) => {
  return (
    <button
      className="button-next"
      style={{ background: color }}
      onClick={handleQuotes}
    >
      <i className="fa-solid fa-angle-right"></i>
    </button>
  )
}

export default Button
