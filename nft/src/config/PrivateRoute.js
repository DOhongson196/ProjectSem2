import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  //const auth = true;
  const roles = ['USER'];
  let admin = JSON.parse(localStorage.getItem('user'));
  return admin?.roles?.find((role) => roles.includes(role)) ? (
    <Outlet />
  ) : admin?.roles ? (
    <Navigate to="/unauthorized" />
  ) : (
    <Navigate to="/login" />
  );
  // return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;