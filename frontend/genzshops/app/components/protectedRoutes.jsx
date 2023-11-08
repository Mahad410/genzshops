import { useEffect } from 'react';
import { checkAuthentication } from '@/utils/helper';
import { useAuth } from '@/utils/context';
import Login from '@/app/(pages)/login/page';
import { useRouter,usePathname } from 'next/navigation';

export const ProtectedRoutes = ({ children }) => {
  const { localToken } = useAuth();
  const path = usePathname();
  useEffect(() => {
    // Check authentication on the client side.
    if (typeof window !== 'undefined') {
      const isAuthenticated = checkAuthentication(localToken);
      if (!isAuthenticated) {
        // Set redirectUrl in localStorage.
        localStorage.setItem('redirectUrl', path);
      }
    }
  }, [localToken]);

  return (
    <>
      {localToken ? children : <Login />}
    </>
  );
};