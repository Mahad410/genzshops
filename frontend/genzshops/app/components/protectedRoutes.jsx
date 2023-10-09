'use client';
import { useEffect } from 'react';
import { checkAuthentication } from '@/utils/helper';
import { useAuth } from '@/utils/context';
import dynamic from 'next/dynamic';
export const ProtectedRoutes = ({ children }) => {
  const { token } = useAuth();
  
  useEffect(() => {
    // Check authentication on the client side.
    if (typeof window !== 'undefined') {
      const isAuthenticated = checkAuthentication(token);
      if (!isAuthenticated) {
        // Set redirectUrl in localStorage.
        localStorage.setItem('redirectUrl', window.location.pathname);
      }
    }
  }, [token]);

  // Render the children only if authentication is successful.
  if (token) {
    return <>{children}</>;
  }

  // If not authenticated, you can use dynamic imports to load the Login component.
  const Login = dynamic(() => import('@/app/(pages)/login/page'));

  return (
    <div>
      <Login />
    </div>
  );
};
