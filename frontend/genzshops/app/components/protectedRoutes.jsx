import React from 'react';
import { checkAuthentication } from '@/utils/helper';
import { useAuth } from '@/utils/context';
import Login from '@/app/(pages)/login/page';
import { usePathname } from 'next/navigation';
import secureLocalStorage from "react-secure-storage";

export const ProtectedRoutes = ({ children }) => {
  const path = usePathname();
  const { token } = useAuth();
    const isAuthenticated = checkAuthentication(token);
    if (!isAuthenticated) {
      secureLocalStorage.setItem('redirectUrl', path);
    }
  return (
    <>
      {token ? children : <Login />}
    </>
  );
};