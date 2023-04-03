import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProduct from '../shared/CardProduct'
import "./styles/similarproducts.css"

const SimilarProducts = ({ product ,category, products}) => {
  const [categories, setCategories] = useState()

  const [idCategory, setIdCategory] = useState()
  const [similarCategory, setSimilarCategory] = useState([])

  useEffect(() => {
    // const URL = `https://e-commerce-api.academlo.tech/api/v1/products/categories`
    // axios
    
    // .get(URL)
    //   .then((res) => {
    //     setCategories(res.data.data.categories)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }, [])

  useEffect(() => {
    // if (categories && product) {
    //   setIdCategory(
    //     categories.filter((category) => category.name === product.category)[0]
    //       .id,
    //   )
    // }
    setIdCategory(category)
  }, [categories,product])

  useEffect(() => {


    setIdCategory(category)

    if (idCategory) {

      
      setSimilarCategory(products.filter((product)=>product.category.id==category))
     
      // const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=${idCategory}`

      // axios
      //   .get(URL)
      //   .then((res) => {
      //     setSimilarCategory(res.data.data.products)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    }
  }, [idCategory])

  return (
    <div>
      <h2>Discover similar products</h2>

      <section className="similar-cards-container">
      {similarCategory?.map((prod) => {
        if (product.id !== prod.id)
          return <CardProduct key={prod.id} product={prod} />
      })}</section>
    </div>
  )
}

export default SimilarProducts
