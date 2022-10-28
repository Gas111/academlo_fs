import React from 'react'
import '../styles/loading.css'
import Footer from './Footer'

const Loading = () => {
  return (
    <div className="main">
      <span className="main__loader">Loading...</span>
      <Footer />
    </div>
  )
}

export default Loading
