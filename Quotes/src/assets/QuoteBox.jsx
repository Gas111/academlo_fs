import React from 'react'
import quotes from '../json/quotes.json'
import Button from './Button'

const QuoteBox = ({ index, handleQuotes, color }) => {
  return (
    <article className="article">
      <p className="text-quote-box">
        <i className="icon-quote-box fa-solid fa-quote-left"></i>
        {quotes[index].quote}
      </p>
      <h3>{quotes[index].author}</h3>
      <Button handleQuotes={handleQuotes} color={color} />
    </article>
  )
}

export default QuoteBox
