// components/ProtectedRoute.tsx

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      router.push('/auth/signin');
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
