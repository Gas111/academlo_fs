import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './styles/header.css'
const Header = () => {
  const navigate = useNavigate()

  const handlerLogin = () => {
    navigate(`/login`)
  }

  return (
    <div className="header-body">
      <div className="header-body__branch">
        <span>
          <Link to="/">Ecommerce</Link>
        </span>
      </div>
      <div className="header-body__container">
        <div className="header-body__container_i">
          <NavLink to="/login">
            <i className="fa-regular fa-user"></i>
          </NavLink>
        </div>
        <div className="header-body__container_i">
          <NavLink to="/purchases">
            <i className="fa-solid fa-gift"></i>
          </NavLink>
        </div>
        <div className="header-body__container_i">
          <NavLink to="/cart">
            {' '}
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
