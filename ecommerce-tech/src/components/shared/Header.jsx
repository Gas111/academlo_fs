import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './styles/header.css'
import Cart from '../../pages/Cart'
const Header = () => {
  const navigate = useNavigate()

  const handlerLogin = () => {
    navigate(`/login`)
  }

  const handleCart = () => {



  }

  return (
    <div className="header-body">
  {/* <div className="home__modal__cart">
        <Cart/>
        </div> */}


      <div className="header-body__branch">
        <span>
          <Link to="/" className='link'>Ecommerce</Link>
        </span>
      </div>
      <div className="header-body__container">
        <div className="header-body__container_i">
          <NavLink to="/login" className='link'>
            <i className="fa-regular fa-user"></i>
          </NavLink>
        </div>
        <div className="header-body__container_i">
          <NavLink to="/purchases" className='link'>
            <i className="fa-solid fa-gift"></i>
          </NavLink>
        </div>
        <div className="header-body__container_i">
          <NavLink to="/cart" onClick={handleCart} className='link'>
            {' '}
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
