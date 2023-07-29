import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const LoggedOutRoute = ({ component: Component, isLoggedIn, ...rest }) => (

        !isLoggedIn
            ? <Outlet/>
            : <Navigate to='/' />

)

export default LoggedOutRoute;