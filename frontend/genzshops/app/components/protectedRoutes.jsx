'use client'
import { useEffect } from 'react';
import { checkAuthentication } from '@/utils/helper';
import { useAuth } from '@/utils/context';
import Login from '../(pages)/login/page';
export const ProtectedRoutes = ({ children }) => {
  // const {token} = useAuth();
  const token = localStorage.getItem('token');
  useEffect(() => {
    const isAuthenticated = checkAuthentication(token);
    if (!isAuthenticated) {
      localStorage.setItem('redirectUrl', window.location.pathname);
    }
  }, [token, 'redirectUrl']);


  return (
    <div>
      {token ? (
        children
      ) : (
        <Login/>
      )}
    </div>
  );
};
