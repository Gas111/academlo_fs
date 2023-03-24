import React from 'react'
import { useDispatch } from 'react-redux'
import {
  ascendingProducts,
  descendingProducts,
} from '../../store/slices/products.slices'
import "./styles/orderByPrice.css"

const OrderByPrice = () => {
  const dispatch = useDispatch()
  
  const handleUp = () => {
    dispatch(ascendingProducts())
    return
  }

  const handleDown = () => {
    dispatch(descendingProducts())
    return
  }

  return (
    <div className="container-order-by">
      <span className="order-by__title">Order By</span>
      <button className="order-by__button" onClick={handleUp}>
        Order Up
      </button>
      <button className="order-by__button" onClick={handleDown}>
        Order Down
      </button>
    </div>
  )
}

export default OrderByPrice
