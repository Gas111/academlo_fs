
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import LoginScreen from './pages/LoginScreen'
import ProductId from './pages/ProductId'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purchases from './pages/Purchases'

function App() {
  
//   useEffect(() => {
//   const data = {
//   firstName: 'gaston',
//   lastName: 'colque',
//   email: 'alcidescolque@gmail.com',
//   password: 'abc123456789',
//   phone: "2222222223",
//   role: 'admin',
// }

//     const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

//     axios
//       .post(URL, data)
//       .then((res) => {
//         console.log(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductId />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>
        
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/purchases" element={<Purchases />}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
