import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { getAllProductsCart } from '../../store/slices/cart.slice'
import './styles/header.css'

const Header = ({ unitsInCart }) => {
  const qtyCart = useSelector((state) => state.quantityCart)
  // const cart = useSelector((state) => state.cart)
  // const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getAllProductsCart())
    // console.log(qtyCart)
  }, [qtyCart])

  return (
    <div className="header-body">
      <div className="header-body__branch">
        <span>
          <Link to="/" className={`link`}>
            <i>Ecommerce</i>
          </Link>
        </span>
      </div>
      <div className="header-body__container">
        <div className="header-body__container_i">
          <NavLink to="/login" className={`link`}>
            <i className={`fa-regular fa-user`}></i>
          </NavLink>
        </div>
        <div className="header-body__container_i">
          <NavLink to="/purchases" className={`link`}>
            <i className={`fa-solid fa-gift `}></i>
          </NavLink>
        </div>
        <div className="header-body__container_i">
          <NavLink to="/cart" className={`link `}>
            {' '}
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
          <div
            className={`header-body__info-quantity ${
              qtyCart ? 'visible-true' : 'visible-false'
            }`}
          >
            {qtyCart}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
