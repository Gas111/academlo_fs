import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProducts from '../components/productId/SimilarProducts'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import LoadingAnimation from '../components/shared/LoadingAnimation'
import './styles/productsId.css'
import { useSelector } from 'react-redux'

const ProductId = ({ setUnitsInCart, unitsInCart }) => {
  const [product, setProduct] = useState()
  const products = useSelector((state) => state.products)
  const { id } = useParams()
  const { category } = useParams()
  const { data } = useParams()

  useEffect(() => {
    setProduct(products?.find((product) => product.id == id))

    // const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
    // console.log(URL)
    // axios
    //   .get(URL)
    //   .then((res) => {
    //     setProduct(res.data.data.product)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }, [])

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
              {product?.title}
            </h2>
          </div>
          <div className="product-id__product-info">
            <ProductInfo
              product={product}
              productId={product.id}
              setUnitsInCart={setUnitsInCart}
              unitsInCart={unitsInCart}
            />
          </div>
          <div className="product-id__similar-products">
            <SimilarProducts
              product={product}
              category={category}
              products={products}
            />
          </div>{' '}
        </div>
      )}
    </main>
  )
}

export default ProductId
