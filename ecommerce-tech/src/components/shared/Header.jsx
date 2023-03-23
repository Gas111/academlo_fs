import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  const navigate = useNavigate()
  const [ecommerce, setEcommerce] = useState(false)
  const [login, setLogin] = useState(false)
  const [cart, setCart] = useState(false)
  const [purchase, setPurchase] = useState(false)

  useEffect(() => {}, [ecommerce, login, cart, purchase])

  const handlerEcommerce = () => {
    setLogin(false)
    setCart(false)
    setPurchase(false)
    setEcommerce(true)
  }

  const handlerLogin = () => {
    setLogin(true)
    setCart(false)
    setPurchase(false)
    setEcommerce(false)
  }

  const handlerCart = () => {
    setLogin(false)
    setCart(true)
    setPurchase(false)
    setEcommerce(false)
  }

  const handlerPurchase = () => {
    setLogin(false)
    setCart(false)
    setPurchase(true)
    setEcommerce(false)
  }

  return (
    <div className="header-body">
      <div className="header-body__branch">
        <span>
          <Link
            to="/"
            className={`link ${ecommerce && 'color-naranja'}`}
            
          >
           <i onClick={handlerEcommerce}>Ecommerce</i> 
          </Link>
        </span>
      </div>
      <div className="header-body__container">
        <div className="header-body__container_i">
          <NavLink
            to="/login"
            className={`link ${login && 'color-naranja'}`}
           
          >
            <i className="fa-regular fa-user" onClick={handlerLogin}></i>
          </NavLink>
        </div>
        <div className="header-body__container_i">
          <NavLink
            to="/purchases"
            className={`link ${purchase && 'color-naranja'}`}
            
          >
            <i className="fa-solid fa-gift" onClick={handlerPurchase}></i>
          </NavLink>
        </div>
        <div className="header-body__container_i">
          <NavLink
            to="/cart"
            className={`link ${cart && 'color-naranja'}`}
           
          >
            {' '}
            <i className="fa-solid fa-cart-shopping" onClick={handlerCart}></i>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
