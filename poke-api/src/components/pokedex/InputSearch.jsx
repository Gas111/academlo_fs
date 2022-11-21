import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/home.css'
import '../../styles/inputSearch.css'


const InputSearch = () => {
  const [searchValue, setSearchValue] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.inputSearch.value.trim().toLowerCase()}`)
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        className="input-search"
        type="text"
        name=""
        id="inputSearch"
        placeholder="Search by Name your Pokemon"
      />
    </form>
  )
}

export default InputSearch
