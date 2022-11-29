// const data = {
//   firstName: 'gaston',
//   lastName: 'colque',
//   email: 'gastoncolque@gmail.com',
//   password: 'abc123456789',
//   phone: "222222222",
//   role: 'admin',
// }

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

  const submit = (data) => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'

    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem('token', res.data.data.token)
        setIsLogged(true)
       })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleIsLogged = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  if (localStorage.getItem('token')) {
    return (
      <main className="main-login">
        <Header />
        <h2>User</h2>
        <button onClick={handleIsLogged}>Log Out</button>

        <Footer />
      </main>
    )
  }

  // const submitNewUser = (data) => {

  //   const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'

  //   axios
  //     .post(URL, data)
  //     .then((res) => { console.log(res.data)
   
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })

  // }

  return (
    <main className="main-login">
      <Header />
      <form onSubmit={handleSubmit(submit)}>
        <h2>Welcome Enter your email and password to continue</h2>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" id="email" {...register('email')} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" id="password" {...register('password')} />
        </div>
        <button>Login</button>
      </form>
      <hr />
{/* 
      <form onSubmit={handleSubmit(submitNewUser)}>
        <h2>Enter your new user</h2>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" id="email" {...register('firstName')} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" id="password" {...register('lastName')} />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="text" id="email" {...register('email')} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" id="password" {...register('password')} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" id="password" {...register('pas')} />
        </div>
        <button>Login New User</button>
      </form> */}

      <Footer />
    </main>
  )
}

export default LoginScreen
