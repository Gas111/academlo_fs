import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "../styles/form.css"

const FormUsers = ({ createNewUser, userToUpdate, updateUser,formVisible,setFormVisible }) => {
  const userDefault = {
    email: '',
    first_name: '',
    last_name: '',
    birthday: '',
    password: '',
  }

  useEffect(() => {
    if (userToUpdate) {
      reset(userToUpdate)
      // register.email=userToUpdate.email
    }
  }, [userToUpdate])

  const { handleSubmit, register, reset } = useForm()

  const submit = (data) => {
    console.log("userToteUser",userToUpdate)
    
    if (userToUpdate.id) {
    
      updateUser(data, userToUpdate.id)
      console.log("Ingrese al update",userToUpdate)
     
    } else {

      console.log(data)
      createNewUser(data)
      setFormVisible(false)

    }
    reset(userDefault)
  }

  return (
    <form className={`form ${formVisible ? "visible-true":"visible-false"}`}  style={{opacity:1}}  onSubmit={handleSubmit(submit)}>
     <div className='close-model'><i className="fa-light fa-rectangle-xmark"></i></div>
      
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register('email')} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register('password')} />
      </div>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input type="text" id="firstname" {...register('first_name')} />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" id="lastname" {...register('last_name')} />
      </div>
      <div>
        <label htmlFor="birthday">Birthday</label>
        <input type="date" id="birthday" {...register('birthday')} />
      </div>
      <div>
        <button>New User</button>
      </div>
    </form>
  )
}

export default FormUsers
