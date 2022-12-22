import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import useGetData from '../../assets/hooks/useGetData'
import { getAllProducts } from '../../store/slices/products.slices'
import './styles/searchfilters.css'

const SearchFilters = ({products,setFilterCategory,setFilterCategoryClick}) => {
  
  const [categories, setCategories] = useState()

  const dispatch=useDispatch()
  const handleClickCategories = (id) => {
    console.log(id)
//    setFilterCategory(products.filter(products=>products.category.id===id))
// setFilterCategoryClick(true)

if(id)
{
  dispatch(getProductsByCategory(id))
}
else{
  dispatch(getAllProducts())
}

}




useEffect(() => {
  const URL =
    'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
  axios
    .get(URL)
    .then((res) =>{ setCategories(res.data.data.categories)
      setFilterCategory(res.data.data.categories)
    
    })
    .catch((err) => {
      console.log(err)
    })
}, [])

  return (
    <section  className="container-filters-price-and-categories">
      {/* <div className="container-filters1">
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
      </div> */}

      <div className="container-filters2">
        <div className="container-filters__categories">
          <span>Categories</span>
          <i className="icon-down fa-solid fa-chevron-down" ></i>
        </div>
        <div className="container-filters__allcategories" onClick={()=>handleClickCategories()}>All products</div>
        {categories?.map(categories=>(<div className="container-filters__allcategories" key={categories.id} onClick={()=>handleClickCategories(categories.id)}>{categories.name}</div> ))}
      </div>
    </section>
  )
}

export default SearchFilters
