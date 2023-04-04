import React, { useEffect, useState } from 'react'
import CardProduct from '../shared/CardProduct'
import './styles/similarproducts.css'

const SimilarProducts = ({ product, category, products }) => {
  const [categories, setCategories] = useState()
  const [idCategory, setIdCategory] = useState()
  const [similarCategory, setSimilarCategory] = useState([])

  useEffect(() => {
    setIdCategory(category)
  }, [categories, product])

  useEffect(() => {
    setIdCategory(category)

    if (idCategory) {
      setSimilarCategory(
        products.filter((product) => product.category.id == category),
      )
    }
  }, [idCategory])

  return (
    <div>
      <h2>Discover similar products</h2>

      <section className="similar-cards-container">
        {similarCategory?.map((prod) =>
          product.id !== prod.id ? (
            <CardProduct
              key={prod.id}
              product={prod}
              category={category}
              // setProduct={setProduct}
            />
          ) : (
            ''
          ),
        )}
      </section>
    </div>
  )
}

export default SimilarProducts
