import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useGetData from '../../assets/hooks/useGetData'
import {
  getAllProducts,
  getProductsByCategory,
  setProductsGlobal,
} from '../../store/slices/products.slices'
import './styles/searchfilters.css'

const SearchFilters = ({
  productsBkp,
  setFilterCategory,
  setFilterCategoryClick,
  categoriesSlice,
}) => {
  
  const dispatch = useDispatch()

  const handleClickCategories = (id) => {
    // e.stopPropagation()
    if (id) {
      // realizo una busqueda de todos los productos q tenga categoria Id==xxx
      const productsFounded = products?.filter(
        (element) => element.category.id == id,
      )

      dispatch(setProductsGlobal(productsFounded))
    } else {
   
    }
  }

  useEffect(() => {


    // const URL =
    //   'https://e-commerce-api.academlo.tech/api/v1/products/categories'
    // axios
    //   .get(URL)
    //   .then((res) => {
    //     setCategories(res.data.data.categories)
    //     setFilterCategory(res.data.data.categories)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }, [])

  return (
    <section className="container-filters-price-and-categories">
      <div className="container-filters2">
        <div className="container-filters__categories">
          <span>Categories</span>
          <i className="icon-down fa-solid fa-chevron-down"></i>
        </div>
        <div
          className="container-filters__allcategories"
          onClick={() => handleClickCategories()}
        >
          All products
        </div>
        {categoriesSlice?.map((categories) => (
          <div
            className="container-filters__allcategories"
            key={categories?.id}
            onClick={() => handleClickCategories(categories?.id)}
          >
            {categories.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default SearchFilters
