import React from 'react'
import '../styles/filter-list.css'
import { useState } from 'react'

const FilterList = ({ suggestedList, setLocation,setShowFilter,showFilter}) => {


  const handleClick = (event, id) => {
    setLocation(id)
    setShowFilter(false)
  }

  return (
    <div
      className={`box-list ${
        showFilter === true ? 'display-on' : 'display-off'
      }`}
    >
      <ul>
        {suggestedList?.map((location) => {
          return (
            <li key={location.id}
              onClick={(event) => handleClick(event, location.id)}
              
            >
              {location.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default FilterList
