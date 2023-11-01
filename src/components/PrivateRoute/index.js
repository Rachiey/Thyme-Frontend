import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Check if the user is logged in by checking local storage
  const isLoggedIn = !!localStorage.getItem('isLoggedIn'); // Check if the item exists

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      // If the user is not logged in, redirect to the login page
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  // If the user is logged in, render the child routes inside Outlet
  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoute;
