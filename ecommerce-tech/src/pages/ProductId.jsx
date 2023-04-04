import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProducts from '../components/productId/SimilarProducts'
import LoadingAnimation from '../components/shared/LoadingAnimation'
import './styles/productsId.css'
import { useSelector } from 'react-redux'

const ProductId = () => {
  const [product, setProduct] = useState('')

  const products = useSelector((state) => state.products)
  const { id } = useParams()
  const { category } = useParams()

  useEffect(() => {
   setProduct(products?.find((product) => product.id == id))
  }, [product])

  return (
    <main className="product-id">
      {product == undefined ? (
        <LoadingAnimation />
      ) : (
        <div>
          <div className="product-id__container-link">
            <h2 className="product-info__title">
              <Link to="/" className="product-info__link-home">
                Home
              </Link>
              <div className="red-ball-decoration"></div>
              {(products?.find((product) => product.id == id)).title}
            </h2>
          </div>
          <div className="product-id__product-info">
            <ProductInfo product={products?.find((product) => product.id == id)} productId={product.id} />
          </div>
          <div className="product-id__similar-products">
            <SimilarProducts
              product={products?.find((product) => product.id == id)}
              category={category}
              products={products}
            
            />
          </div>
        </div>
      )}
    </main>
  )
}

export default ProductId
