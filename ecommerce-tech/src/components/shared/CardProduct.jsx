import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import './styles/cardProduct.css'

const CardProduct = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate(`/product/${product.id}`)
  }
  const handleAddCart = (e) => {

    e.stopPropagation()
    console.log("aca estoy")

    const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'

    const data = {
      id: product.id,
      quantity: 1,
    }
    let response=axios
      .post(URL, data, getConfig())
      .then((res) => {
        dispatch(getAllProductsCart())
      })
      .catch((err) => {
      })

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
        <button className="product__button-cart" onClick={handleNavigation}>
          <i className="product__icon fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </article>
  )
}

export default CardProduct
