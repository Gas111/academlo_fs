import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/cart/CartItem'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import { getAllProductsCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import './styles/cart.css'

const Cart = () => {
  const cart = useSelector((state) => state.cart)

  const [total, setTotal] = useState(0)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductsCart())
  }, [])

  console.log(cart)

  const data = {
    street: 'Green St. 1456',
    colony: 'Southwest',
    zipCode: 12345,
    city: 'USA',
    references: 'Some references',
  }

  const handleBuyNow = () => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
        setTotal(0)
      })
      .catch((err) => {})
  }

  useEffect(() => {
    if (cart) {
      const result = cart.reduce((acc, cv) => {
        return Number(acc + cv.price * cv.productsInCart.quantity)
      }, 0)
      setTotal(result)
    }
  }, [cart])

  return (
    <div className="cart">
  
      {cart?.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <h2 className="cart__title">Total Price:${total}</h2>
      <button className="cart__buy-button" onClick={handleBuyNow}>
        Buy Now
      </button>

    </div>
  )
}

export default Cart
