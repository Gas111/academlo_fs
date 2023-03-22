// const data = {
//   firstName: 'gaston',
//   lastName: 'colque',
//   email: 'gastoncolque@gmail.com',
//   password: 'abc123456789',
//   phone: "222222222",
//   role: 'admin',
// }
import { BiUser } from "react-icons/bi";
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import './styles/loginscreen.css'

const LoginScreen = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, reset } = useForm()

  const [isLogged, setIsLogged] = useState(false)
  const [errorLogged, setErrorLogged] = useState(false)

  const submit = (data) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'

    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem('token', res.data.data.token)
        setErrorLogged(false)
        setIsLogged(true)
      })
      .catch((err) => {
      setErrorLogged(true)
      reset()
      })
  }

  const handleIsLogged = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  if (localStorage.getItem('token')) {
    return (
      <main className="user-logged">
        <h1><BiUser/></h1>
        <h2>User</h2>
        <button onClick={handleIsLogged}>Log Out</button>
      </main>
    )
  }

  return (
    <main className="main-login">
      <Header />
      <form onSubmit={handleSubmit(submit)}>
        <h2>Welcome Enter your email and password to continue</h2>
        <p>For test use gastoncolque@gmail.com</p>
        <p>and password: abc123456789</p>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" id="email" {...register('email')} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" id="password" {...register('password')} />
        </div>
        <div>
        <p className="error">{errorLogged && "error in email or password"}</p>  
        </div>
        
        <button className="main-button">Login</button>
      </form>
      <hr />
    </main>
  )
}

export default LoginScreen
