import React from 'react'
import "./styles/searchInput.css"

const SearchInput = ({inputText,setInputText}) => {

const handleChange = (e) => {
  // e.preventDefault()
  e.stopPropagation()
  setInputText(e.target.value)
 }


  return (
    <div className="search">
      <input value={inputText} onChange={handleChange} type="text" className="search__input" placeholder="Search your product here"/>
      <button className="search__button"><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default SearchInput
