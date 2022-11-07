import React from 'react'
import '../styles/button-pages.css'

const ButtonPages = ({ quantityResidents, setPage}) => {
  const paintButtons = () => {
    let array = []

    let quantityPages = parseInt(quantityResidents / 10)
    const restPages = parseFloat(quantityResidents / 10)

    if (restPages > 0) {
      ++quantityPages
    }
    for (let i = 0; i < quantityPages; i++) {
      array[i] = [i + 1]
    }

 

    return array.map((e) => (
      <div key={e}
        className="single-button-pages"
        onClick={() => {
          pageSelected(e)
        }}
      >
        {e}
      </div>
    ))
  }

  const pageSelected = (e) => {
    setPage(e)
  }

  return <div >{paintButtons()}</div>
}

export default ButtonPages
