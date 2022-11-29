import React from 'react'
import "./styles/searchfilters.css"

const SearchFilters = ({products}) => {


console.log(products)

  return (
    <section>
      <div className="container-filters">       
        <div className="container-filters__price">
          <span>Price</span>
          <i className="icon-down fa-solid fa-chevron-down"></i>
        </div>
        <form action="">
          <label htmlFor=""></label>
          <input type="number" />
          <label htmlFor=""></label>
          <input type="number" />
        </form>
        <button></button>
      </div>

      <div className="container-filters">       
        <div className="container-filters__categories">
          <span>Price</span>
          <i className="icon-down fa-solid fa-chevron-down"></i>
        </div>
        {}
      </div>

    </section>
  )
}

export default SearchFilters
