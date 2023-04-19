import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const LoggedOutRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    <Route render={() => (
        !isLoggedIn
            ? <Component {...rest} />
            : <Navigate to='/' />
    )} />
)

export default LoggedOutRoute;