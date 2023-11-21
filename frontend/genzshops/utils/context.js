'use client'
import React, { createContext, useContext, useState } from 'react';
import secureLocalStorage from "react-secure-storage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(secureLocalStorage.getItem('token') || null);
  const [role, setRole] = useState(secureLocalStorage.getItem('role') || null);
  const [cartItems, setCartItems] = useState(secureLocalStorage.getItem('cartItems') ? JSON.parse(secureLocalStorage.getItem('cartItems')) : []);
  
  const checkAuthentication = () => {
    return !!token;
  };
  
  return (
    <AuthContext.Provider value={{ token, setToken, role, setRole, checkAuthentication, cartItems, setCartItems }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


