import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'

import Cart from './pages/Cart'
import Home from './pages/Home'
import LoginScreen from './pages/LoginScreen'
import ProductId from './pages/ProductId'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purchases from './pages/Purchases'


function App() {

 

  return (
    <div className="App">
      <Header className="App__header" />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        ></Route>
        <Route
          path="/product/:id/:category"
          element={
            <ProductId
          
            />
          }
        ></Route>
        <Route
          path="/login"
          element={<LoginScreen  />}
        ></Route>

        <Route element={<ProtectedRoutes />}>
          <Route
            path="/cart"
            element={
              <Cart  />
            }
          ></Route>
          <Route path="/purchases" element={<Purchases />}></Route>
        </Route>
      </Routes>

      <Footer className="App__footer" />
    </div>
  )
}

export default App
