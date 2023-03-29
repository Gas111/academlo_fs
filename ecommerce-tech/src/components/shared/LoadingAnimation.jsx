import React from 'react'
import '../shared/styles/loadingAnimation.css'

const LoadingAnimation = () => {
  return (
    <div className="overlay">
        <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingAnimation
