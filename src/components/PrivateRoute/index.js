// import { Outlet, Navigate } from 'react-router-dom'

// const PrivateRoutes = ({ isLoggedIn }) => {
//     let auth = {'token':true}
//     return(
//         auth.token ? <Outlet/> : <Navigate to="/login"/>
//     )
// }

// export default PrivateRoutes
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  // Check the login status from local storage
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Route
      {...rest}
      element={isLoggedIn ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;

