import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './styles/header.css'

const Header = ({ quantityCart }) => {


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
              quantityCart ? 'visible-true' : 'visible-false'
            }`}
          >
            {quantityCart}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
