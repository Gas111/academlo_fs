import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import LoadingAnimation from '../shared/LoadingAnimation'
import './styles/productInfo.css'
import { BiUser } from 'react-icons/bi'
import { setUnitsCart } from '../../store/slices/quantityCart.slice'

const ProductInfo = ({ product, productId }) => {
  const [counter, setCounter] = useState(1)
  const [index, setIndex] = useState(0)
  const [visibleF, setVisibleF] = useState(true)
  const [visibleB, setVisibleB] = useState(true)
  const [isInCart, setisInCart] = useState(false)

  const cart = useSelector((state) => state.cart)
  const isLogged = useSelector((state) => state.isLogged)
  const quantityCart = useSelector((state) => state.quantityCart)
  const dispatch = useDispatch()
  const textAdded = 'Product was Added to Cart'
  const textAdd = 'Add to Cart'
  const textLoginFirst = 'You Must login First'

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

  useEffect(() => {

    const found = cart?.find((element) => element.id == parseInt(productId))
    if (found) setisInCart(true)
    else setisInCart(false)
  }, [])

 
  const buttonFunction = () => {
    if (isLogged && isInCart) {
      return <button className={` ${'button-disabled'}  `}>{textAdded}</button>
    }

    if (isLogged && !isInCart) {
      return (
        <button
          onClick={handleAddCart}
          className={` ${'product-info__button'}`}
        >
          {textAdd}
          <i className="product-info__icon fa-solid fa-cart-shopping"></i>
        </button>
      )
    }
    if (!isLogged) {
      return (
        <button className={` ${'button-disabled'}  `}>
          {textLoginFirst}
          <i className="product-info__icon">
            <BiUser />
          </i>
        </button>
      )
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
        setisInCart(true)
       dispatch(setUnitsCart(quantityCart+1))
       const result = cart?.reduce((acc, cv) => {
        return Number(acc + cv.price * cv.productsInCart.quantity)
        }, 0)
       product.price
      cart.reduce
      })
      .catch((err) => {
        setisInCart(false)
      })
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
          {product == undefined ? (
            <LoadingAnimation />
          ) : (
            <img
              src={product?.productImgs[index]}
              alt="image of product"
              id="image"
            />
          )}
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
        {buttonFunction()}

        <p className="product-info__description">{product?.description}</p>
      </footer>
    </div>
  )
}

export default ProductInfo
