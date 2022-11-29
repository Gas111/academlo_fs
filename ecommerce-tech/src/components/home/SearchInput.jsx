import React from 'react'
import "./styles/searchInput.css"

const SearchInput = () => {
  return (
    <div className="search">
      <input type="text" className="search__input" placeholder="Search your product here"/>
      <button className="search__button"><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default SearchInput
