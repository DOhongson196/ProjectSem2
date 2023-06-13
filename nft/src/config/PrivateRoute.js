import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../context';

const PrivateRoute = () => {
  //const auth = true;
  const { keepLogin } = useContext(AuthContext);
  const roles = ['ROLE_USER'];
  let user = keepLogin ? JSON.parse(localStorage.getItem('user')) : JSON.parse(sessionStorage.getItem('user'));
  return user?.roles?.find((role) => roles.includes(role)) ? (
    <Outlet />
  ) : user?.roles ? (
    <Navigate to="/unauthorized" />
  ) : (
    <Navigate to="/login" />
  );
  // return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
