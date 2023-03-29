import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/cart/CartItem'
import LoadingAnimation from '../components/shared/LoadingAnimation'
import { getAllProductsCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import './styles/cart.css'

const Cart = () => {
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()
  const quantityCart = useSelector((state) => state.quantityCart)
  const cart = useSelector((state) => state.cart)
  const [itemDeleted, setItemDeleted] = useState(false)

  useEffect(() => {}, [])

  useEffect(() => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart'

    dispatch(getAllProductsCart())

    const result = cart?.reduce((acc, cv) => {
      return Number(acc + cv.price * cv.productsInCart.quantity)
    }, 0)
    setTotal(result)
  }, [cart])

  const handleBuyNow = () => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'

    axios
      .post(URL, data, getConfig())
      .then((res) => {
        dispatch(setCartGlobal(null))
        setTotal(0)
      })
      .catch((err) => {})
  }

  return (
    <div className="cart">
      {cart === undefined ? (
        <LoadingAnimation />
      ) : (
        <div>
          {cart?.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              setItemDeleted={setItemDeleted}
            />
          ))}
          <h2 className="cart__title">Total Price:${total}</h2>
          <button className="cart__buy-button" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
