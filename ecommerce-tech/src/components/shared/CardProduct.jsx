import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import getConfig from '../../utils/getConfig'
import './styles/cardProduct.css'

const CardProduct = ({ product, category }) => {
  const navigate = useNavigate()

  useEffect(() => {}, [])

  const handleNavigation = () => {
    navigate(`/product/${product.id}/${category}`)
  }

  const handleAddCart = (e) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'

    const data = {
      id: product.id,
      quantity: 1,
    }
    axios
      .post(URL, data, getConfig())
      .then((res) => {})
      .catch((err) => {})
  }

  return (
    <article className="product" onClick={handleNavigation}>
      <header className="product__header">
        <img src={product.productImgs[0]} alt="image of product" />
      </header>
      <h3 className="product__title">{product.title}</h3>

      <div className="product__info-container">
        <div className="product__price">
          <span className="product__price-label">Price</span>
          <span className="product__price-number">${product.price}</span>
        </div>
        <button className="product__button-cart">
          <i className="product__icon fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </article>
  )
}

export default CardProduct
