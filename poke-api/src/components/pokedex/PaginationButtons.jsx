import React from 'react'
import { useSelector } from 'react-redux'

import '../../styles/paginationButtons.css'

const PaginationButtons = ({ setPageSelected, pageSelected }) => {
  const quantityCardsForPages = useSelector((state) => state.cardsForPage)

  const pokemonsLength = useSelector((state) => state.pokemonsLength)

  const pagesPerBlock = 4

  const currentBlock = Math.ceil(pageSelected / pagesPerBlock)
 

  const totalPages = Math.ceil(pokemonsLength / quantityCardsForPages)

  const blockLength = Math.ceil(pokemonsLength / pagesPerBlock) //QUantity of blocks in pages.

  const arrayButtons = []

  const initialPage = (currentBlock - 1) * pagesPerBlock
  const limitPage =
    currentBlock * pagesPerBlock >= blockLength
      ? totalPages
      : currentBlock * pagesPerBlock

  for (let i = initialPage; i < limitPage; i++) {
    arrayButtons[i] = i + 1
  }

  const handleClick = (button) => {
    setPageSelected(button)
  }

  const handleNextBlock = () => {
    setPageSelected(pageSelected + 1)
  }

  const handlePreviusBlock = () => {
    setPageSelected(pageSelected - 1)
  }

  return (
    <section className="pagination-buttons">
      {pageSelected > 1 && (
        <div onClick={handlePreviusBlock} className="button-page">
          &#60;
        </div>
      )}
      {arrayButtons.map((button) => (
        <div
          onClick={() => handleClick(button)}
          className={`button-page ${
            button === pageSelected && 'button-active'
          }`}
          key={button}
        >
          {button}
        </div>
      ))}
      {pageSelected < totalPages && (
        <div onClick={handleNextBlock} className="button-page">
          &#62;
        </div>
      )}
    </section>
  )
}

export default PaginationButtons
