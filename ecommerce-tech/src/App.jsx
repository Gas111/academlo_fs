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
import { getAllProductsCart } from './store/slices/cart.slice'

function App() {
  const [unitsInCart, setUnitsInCart] = useState(0)
  const qtyCart = useSelector((state) => state.quantityCart)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsCart())
    setUnitsInCart(qtyCart)
  }, [qtyCart])

  return (
    <div className="App">
      <Header className="App__header" unitsInCart={unitsInCart} />
      <Routes>
        <Route
          path="/"
          element={<Home setUnitsInCart={setUnitsInCart} />}
        ></Route>
        <Route
          path="/product/:id"
          element={
            <ProductId
              setUnitsInCart={setUnitsInCart}
              unitsInCart={unitsInCart}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={<LoginScreen setUnitsInCart={setUnitsInCart} />}
        ></Route>

        <Route element={<ProtectedRoutes />}>
          <Route
            path="/cart"
            element={
              <Cart setUnitsInCart={setUnitsInCart} unitsInCart={unitsInCart} />
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
