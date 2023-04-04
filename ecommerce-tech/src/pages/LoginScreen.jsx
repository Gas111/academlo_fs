// const data = {
//   firstName: 'gaston',
//   lastName: 'colque',
//   email: 'gastoncolque@gmail.com',
//   password: 'abc123456789',
//   phone: "222222222",
//   role: 'admin',
// }
import { BiUser } from 'react-icons/bi'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Header from '../components/shared/Header'
import './styles/loginscreen.css'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLogged } from '../store/slices/isLogged.slice'
import LoadingAnimation from '../components/shared/LoadingAnimation'
import { setUnitsCart } from '../store/slices/quantityCart.slice'

const LoginScreen = ({}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const isLogged = useSelector((state) => state.isLogged)
  const { handleSubmit, register, reset } = useForm()
  const [errorLogged, setErrorLogged] = useState(false)

  useEffect(() => {

  
  }, [isLogged, errorLogged])

  const submit = (data) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'

    setIsLoading(true)
    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem('token', res.data.data.token)
        setErrorLogged(false)
        dispatch(setIsLogged(true))
        setIsLoading(false)
       

      })
      .catch((err) => {
        setIsLoading(false)
        setErrorLogged(true)
        dispatch(setIsLogged(false))
        reset()
      })

    



  }

  const handleIsLogged = () => {
    localStorage.removeItem('token')
    dispatch(setUnitsCart(0))
    dispatch(setIsLogged(false))
    navigate('/login')
    reset()
  
  }
  if (localStorage.getItem('token')) {
    return (
      <main className="user-logged">
        <h1>
          <BiUser />
        </h1>
        <h2>User</h2>
        <button onClick={handleIsLogged}>Log Out</button>
      </main>
    )
  }




  return (
    <main className="main-login">
      <Header />

      {isLoading ? (
        <LoadingAnimation />
      ) : (
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
            <p className="error">
              {errorLogged && 'error in email or password'}
            </p>
          </div>

          <button className="main-button">Login</button>
        </form>
      )}

      <hr />
    </main>
  )
}

export default LoginScreen
