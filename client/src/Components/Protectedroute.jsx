import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Protectedroute = () => {
  const { user } = useAuth()

  return user ? <Outlet /> : <Navigate to='/login' replace />
}

export default Protectedroute