import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import LoadingAnimation from './components/shared/LoadingAnimation'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LoginScreen from './pages/LoginScreen'
import ProductId from './pages/ProductId'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purchases from './pages/Purchases'
import { getAllProductsCart } from './store/slices/cart.slice'

function App() {


  const [isLoading, setIsLoading] = useState(false)
  const [quantityCart, setQuantityCart] = useState(0)


  return (
    <div className="App">
      <Header className="App__header" quantityCart={quantityCart} />
      {isLoading && <LoadingAnimation />}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductId />}></Route>
        <Route path="/login" element={<LoginScreen setQuantityCart={setQuantityCart}/>}></Route>

        <Route element={<ProtectedRoutes />}>
          <Route
            path="/cart"
            element={<Cart setQuantityCart={setQuantityCart} />}
          ></Route>
          <Route path="/purchases" element={<Purchases />}></Route>
        </Route>
      </Routes>

      <Footer className="App__footer" />
    </div>
  )
}

export default App
