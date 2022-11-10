import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const FormUsers = ({ createNewUser, userToUpdate,updateUser }) => {
  
  
  
    const userDefault = {
    email: '',
    first_name: '',
    last_name: '',
    birthday: '',
    password: '',
  }


  useEffect(() => {
    if(userToUpdate)
    {

        reset(userToUpdate)
        // register.email=userToUpdate.email
    }
    
  }, [userToUpdate])
  

  const { handleSubmit, register, reset} = useForm()

  const submit = (data) => {
    
    if(updateUser)
    {
        updateUser(data,userToUpdate.id)

    }
    else{
        createNewUser(data)
      

    }
    reset(userDefault)

  }

  return (
    <form onSubmit={handleSubmit(submit)}>
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
        <label htmlFor="birthday"></label>
        <input type="date" id="birthday" {...register('birthday')} />
      </div>
      <div>
        <button>submit</button>{' '}
      </div>
    </form>
  )
}

export default FormUsers
