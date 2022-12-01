import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useGetData from '../../assets/hooks/useGetData'
import './styles/searchfilters.css'

const SearchFilters = ({ products,setfilterChange }) => {

const [categories, setCategories] = useState()

const handleClickCategories = (id) => {

  // useEffect(() => {  setfilterChange(id)
  // }, [])
  

  // useEffect(() => {
  //   const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`
  //   axios
  //     .get(URL)
  //     .then((res) => {
  //             setfilterChange(res.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })


  // }, [])
 
 
 
}
  
  useEffect(() => {
    const URL =
      'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
    axios
      .get(URL)
      .then((res) => setCategories(res.data.data.categories))
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <section  className="container-filters-price-and-categories">
      <div className="container-filters1">
        <div className="container-filters__price">
          <span>Price</span>
          <i className="icon-down fa-solid fa-chevron-down"></i>
        </div>
        <form className="container-filters__form" action="">
         <div> <label htmlFor="input-max">From</label>
          <input type="number" id="input-max" /></div>
          <div>  <label htmlFor="input-min">To</label>
          <input type="number" id="input-min" /></div>
        </form>
        <button className="container-filters__button">Filter Price</button>
      </div>

      <div className="container-filters2">
        <div className="container-filters__categories">
          <span>Categories</span>
          <i className="icon-down fa-solid fa-chevron-down"></i>
        </div>
        {categories?.map(categories=>(<div className="container-filters__allcategories" key={categories.id} onClick={()=>handleClickCategories(categories.id)}>{categories.name}</div> ))}
      </div>
    </section>
  )
}

export default SearchFilters
