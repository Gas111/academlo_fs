import React from 'react'
import { useSelector } from 'react-redux'
import {Outlet,Navigate} from 'react-router-dom'

const ProtectedRoutes = () => {
  const userName = useSelector((state) => state.userName)

  console.log(userName)

  if (userName) {
    return <Outlet />
  } else {
    return <Navigate to="/" />
  }


}

export default ProtectedRoutes
