import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  // Check if the user is logged in using local storage or any other authentication logic
  const isLoggedIn = !!localStorage.getItem('isLoggedIn');
//   const navigate = useNavigate();

  if (!isLoggedIn) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  // If user is logged in, render the child routes inside Outlet
  return (
    <>
      <Element />
      <Outlet />
    </>
  );
};

export default PrivateRoute;