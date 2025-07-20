import React from 'react'
import { createContext, useContext, useState } from 'react';
const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    ()=>{
      const token=localStorage.getItem("token");
      return Boolean(token);
    }
  );

  const login=(token='mockToken')=>{
    setIsAuthenticated(true);
    localStorage.setItem("token",token);
  }

  const logout=()=>{
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{isAuthenticated,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>useContext(AuthContext);
export {AuthProvider};