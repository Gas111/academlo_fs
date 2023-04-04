import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getConfig from '../../utils/getConfig'
import LoadingAnimation from '../shared/LoadingAnimation'
import './styles/cartItem.css'
import { setUnitsCart } from '../../store/slices/quantityCart.slice'
import { getAllProductsCart } from '../../store/slices/cart.slice'

const CartItem = ({ product, setItemDeleted ,setTotal,cart }) => {
  const dispatch = useDispatch()
  const [changes, setChanges] = useState(false)
  const quantityCart = useSelector((state) => state.quantityCart)

  const handleButtonDelete = (id) => {
    setChanges(true)
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${id}`
    axios
      .delete(URL, getConfig())
      .then((res) => {
        dispatch(setUnitsCart(quantityCart - 1))
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setChanges(false)
        setItemDeleted(true)

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
