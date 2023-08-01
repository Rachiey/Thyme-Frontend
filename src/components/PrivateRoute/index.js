import React, {useEffect} from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  // Check if the user is logged in using local storage or any other authentication logic
  const isLoggedIn = !!localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();


useEffect (() => {
  if (!isLoggedIn) {
    // If user is not logged in, redirect to login page
    navigate('/login', {replace: true});
  }
}, [isLoggedIn, navigate]);


  // If user is logged in, render the child routes inside Outlet
  return (
    <>
      <Element />
      <Outlet />
    </>
  );
};

export default PrivateRoute;