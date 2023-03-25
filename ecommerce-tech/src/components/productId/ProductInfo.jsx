import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import './styles/productInfo.css'

const ProductInfo = ({ product }) => {
  const navigate = useNavigate()
  const [counter, setCounter] = useState(1)
  const [index, setIndex] = useState(0)
  const [visibleF, setVisibleF] = useState(true)
  const [visibleB, setVisibleB] = useState(true)
  let [status, setStatus] = useState('')
  const [isInCart, setisInCart] = useState(false)

  const cart = useSelector((state) => state.cart)

  const handleDecrements = () => {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  const handleIncrement = () => {
    if (counter < 100) {
      setCounter(counter + 1)
    }
  }

  const handleNextImage = () => {
    setVisibleF(true)
    setVisibleB(true)
    if (index < product?.productImgs.length - 1) {
      setIndex(index + 1)
    } else {
      setVisibleF(false)
    }
  }

  const handleBackImage = () => {
    setVisibleF(true)
    setVisibleB(true)
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setVisibleB(false)
    }
  }

  useEffect(() => {}, [index])

  const handleAddCart = () => {
    let found = 0
    const data = {
      id: `${product.id}`,
      quantity: `${counter}`,
    }
    found = cart.find((element) => element.id == parseInt(data.id))
    if (!found) {
      const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'
      axios
        .post(URL, data, getConfig())
        .then((res) => {
          setStatus(res.status)
          navigate('/cart')
        })
        .catch((err) => {
          console.log(status)
          if ((status = '401')) navigate('/login')
        })
    } else {
      setisInCart(true)
    }
  }

  return (
    <div className="product-info">
      <section className="product-info__image">
        <div>
          <button
            onClick={handleBackImage}
            className={`button-back ${
              visibleB ? 'visible-true' : 'visible-false'
            }`}
          >
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
          <button
            onClick={handleNextImage}
            className={`button-foward ${
              visibleF ? 'visible-true' : 'visible-false'
            }`}
          >
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
            <div className="counter-decrement" onClick={handleDecrements}>
              -
            </div>
            <div className="counter-value">{counter}</div>
            <div className="counter-increment" onClick={handleIncrement}>
              +
            </div>
          </div>
        </div>
        <p
          className={`product-info__warning ${
            isInCart ? 'visible-true' : 'visible-false'
          }`}
        >
          The product was included to Cart
        </p>
        <button onClick={handleAddCart} className="product-info__button">
        { isInCart ? 'Product was Added to Cart' : 'Add to Cart'
          }
          <i className="product-info__icon fa-solid fa-cart-shopping"></i>
        </button>

        <p className="product-info__description">{product?.description}</p>
      </footer>
    </div>
  )
}

export default ProductInfo
