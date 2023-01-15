import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthContext';

export const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext);

  !authenticated && toast.error('Efetue o login!');

  return authenticated ? <Outlet /> : <Navigate to="/session/login" />;
};
