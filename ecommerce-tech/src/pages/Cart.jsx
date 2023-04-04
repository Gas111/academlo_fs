import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/cart/CartItem'
import LoadingAnimation from '../components/shared/LoadingAnimation'
import { getAllProductsCart, setCartGlobal } from '../store/slices/cart.slice'
import getConfig from '../utils/getConfig'
import './styles/cart.css'
import { setUnitsCart } from '../store/slices/quantityCart.slice'

const Cart = () => {

  const dispatch = useDispatch()
  const quantityCart = useSelector((state) => state.quantityCart)
  const cart = useSelector((state) => state.cart)
  const [itemDeleted, setItemDeleted] = useState(false)
  // data for buy
  const data = {
    street: 'Green St. 1456',
    colony: 'Southwest',
    zipCode: 12345,
    city: 'USA',
    references: 'Some references',
  }

  useEffect(() => {
    dispatch(getAllProductsCart())
    if (itemDeleted) {
      setItemDeleted(false)
    }
  }, [itemDeleted])

  const handleBuyNow = () => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases'

    axios
      .post(URL, data, getConfig())
      .then((res) => {
        dispatch(setCartGlobal(null))
        dispatch(setUnitsCart(0))
        dispatch(getAllProductsCart())
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
              cart={cart}
            />
          ))}
          <h2 className="cart__title">
            Total Price:$
            {cart?.reduce((acc, cv) => {
              return Number(acc + cv.price * cv.productsInCart.quantity)
            }, 0)}
          </h2>
          <button className="cart__buy-button" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
