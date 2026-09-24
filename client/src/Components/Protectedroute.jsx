import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Protectedroute = () => {
  const { user } = useContext(ShopContext)

  return user ? <Outlet /> : <Navigate to='/login' replace />
}

export default Protectedroute