'use client'
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  
  const checkAuthentication = () => {
    return !!token;
  };
  
  return (
    <AuthContext.Provider value={{ token, setToken, checkAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
