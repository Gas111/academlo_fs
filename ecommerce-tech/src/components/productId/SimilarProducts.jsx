import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardProduct from '../shared/CardProduct'
import "./styles/similarProducts.css"

const SimilarProducts = ({ product }) => {
  const [categories, setCategories] = useState()

  const [idCategory, setIdCategory] = useState()
  const [similarCategory, setSimilarCategory] = useState()

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`

    console.log(URL)
    axios
      .get(URL)
      .then((res) => {
        setCategories(res.data.data.categories)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [product])

  useEffect(() => {
    if (categories && product) {
      setIdCategory(
        categories.filter((category) => category.name === product.category)[0]
          .id,
      )
    }
  }, [categories, product])

  useEffect(() => {
    if (idCategory) {
      const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${idCategory}`
      console.log(URL)

      axios
        .get(URL)
        .then((res) => {
          setSimilarCategory(res.data.data.products)
        })
        .catch((err) => {
          console.log(err)
        })
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
