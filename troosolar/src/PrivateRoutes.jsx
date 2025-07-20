import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'


const PrivateRoutes = () => {
  const isAuthenticated = useAuth();
  useEffect(() => {}, [isAuthenticated]);

  return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoutes