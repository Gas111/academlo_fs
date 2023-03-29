import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import LoadingAnimation from '../shared/LoadingAnimation'
import './styles/cartItem.css'

const CartItem = ({ product, setItemDeleted }) => {
  const [changes, setChanges] = useState(false)

  const handleButtonDelete = (id) => {
    setChanges(true)
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${id}`
    axios
      .delete(URL, getConfig())
      .then((res) => {})
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setChanges(false)
      })
  }

  return (
    <div>
      {changes ? (
        <LoadingAnimation />
      ) : (
        <article className="cart-item">
          <h1>{product.title}</h1>
          <div>
            <span>Price:</span>
            <span>{product.price}</span>
          </div>
          <div>
            <span>Quantity:</span>
            <span> {product.productsInCart.quantity}</span>
          </div>
          <div className="cart-container-button">
            <button
              onClick={() => handleButtonDelete(product.id)}
              className="button-delete"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </article>
      )}
    </div>
  )
}

export default CartItem
