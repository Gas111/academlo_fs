import React from 'react'
import './styles/searchfilters.css'

const SearchFiterByPrice = ({ setFilterByPrice }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    const from = +e.target.inputmax.value
    const to = +e.target.inputmin.value

    const obj = {
      from: from,
      to: to !== 0 ? to : Infinity,
    }

    setFilterByPrice(obj)
  }

  return (
    <div className="container-filters1">
      <form className="container-filters__form" onClick={handleSubmit}>
        <div className="container-filters__price">
          <span>Price</span>
          <i className="icon-down fa-solid fa-chevron-down"></i>
        </div>
        <div>
          <label htmlFor="inputmax">From</label>
          <input type="number" id="inputmax"/>
        </div>
        <div>
          <label htmlFor="inputmin">To</label>
          <input type="number" id="inputmin" />
        </div>
        <div className="container-filters__button">
          <button className="filter__button">Filter Price</button>
        </div>
      </form>
    </div>
  )
}

export default SearchFiterByPrice
