import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import getConfig from '../../utils/getConfig'
import './styles/productInfo.css'

const ProductInfo = ({ product }) => {
  const [counter, setCounter] = useState(1)
  const [index, setIndex] = useState(0)

  const handleDecrement = () => {
    if (counter > 1) setCounter(counter - 1)
  }

  const handleIncrement = () => {
    if (counter < 100) setCounter(counter + 1)
  }

  const handleNextImage = () => {
    if (index < product?.productImgs.length - 1) {
      setIndex(index + 1)

      //  e.target.parentNode.previousSibling.firstChild.style="color-b"
    }
  }

  const handleBackImage = () => {
    // console.log(e.target.parentNode.previousSibling.firstChild.src)

    if (index > 0) {
      setIndex(index - 1)
    }
  }

  const handleAddCart = () => {
    const data = {
      id: `${product.id}`,
      quantity: `${counter}`,
    }
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'

    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="product-info">
      <section className="product-info__image">
        <div>
          <button onClick={handleBackImage} className="button-back">
            &#60;
          </button>
        </div>
        <div className="image-container">
          <img
            src={product?.productImgs[index]}
            alt="image of product"
            id="image"
          />
        </div>
        <div>
          <button onClick={handleNextImage} className="button-foward">
            &#62;
          </button>
        </div>
      </section>

      <h2 className="product-info__title">{product?.title}</h2>

      <footer className="product-info__footer">
        <div className="product-info__price-container">
          <span className="product-info__price-label">Price</span>
          <span className="product-info__price-number">{product?.price}</span>
        </div>

        <div className="product-info__quantity-container">
          <span className="product-info__quantity-title">Quantity</span>
          <div className="counter-container">
            <div className="counter-decrement" onClick={handleDecrement}>
              -
            </div>
            <div className="counter-value">{counter}</div>
            <div className="counter-increment" onClick={handleIncrement}>
              +
            </div>
          </div>
        </div>

        <button onClick={handleAddCart} className="product-info__button">
          Add to Cart
          <i className="product-info__icon fa-solid fa-cart-shopping"></i>
        </button>

        <p className="product-info__description">{product?.description}</p>
      </footer>
    </div>
  )
}

export default ProductInfo
