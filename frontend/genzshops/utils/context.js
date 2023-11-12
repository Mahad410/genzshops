'use client'
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const localToken = localStorage.getItem('token');
  const [cartItems, setCartItems] = useState([]);
  
  const checkAuthentication = () => {
    return !!localToken;
  };
  
  return (
    <AuthContext.Provider value={{ token, setToken, checkAuthentication, localToken,cartItems, setCartItems }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};


