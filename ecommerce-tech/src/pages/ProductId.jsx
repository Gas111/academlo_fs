import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProducts from '../components/productId/SimilarProducts'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import './styles/productsId.css'
const ProductId = () => {
  const [product, setProduct] = useState()

  const { id } = useParams()

  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
    console.log(URL)
    axios
      .get(URL)
      .then((res) => {
        setProduct(res.data.data.product)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  console.log(product?.category)

  return (
    <main className="product-id">
      <div className="product-id__container-link">
        <h2 className="product-info__title">
          <Link to="/" className="product-info__link-home">
            Home
          </Link>
          <div className="red-ball-decoration"></div>
          {product?.title}
        </h2>
      </div>

      <div className="product-id__product-info">
        <ProductInfo product={product} />
      </div>
      <div className="product-id__similar-products">
        <SimilarProducts product={product} />
      </div>
    </main>
  )
}

export default ProductId
