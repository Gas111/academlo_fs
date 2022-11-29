import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/cart/CartItem'
import Header from '../components/shared/Header'
import { getAllProductsCart } from '../store/slices/cart.slice'

const Cart = () => {
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllProductsCart())
  }, [])

  console.log(cart)

  return (
    <div>
      <Header />

      {cart?.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}     </div>
  )
}

export default Cart
