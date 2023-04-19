// import React from 'react';
// import { Route, Navigate, Outlet } from 'react-router-dom';

// const LoggedOutRoute = ({ component: Component, isLoggedIn, ...rest }) => (
//     <Route render={() => (
//         !isLoggedIn
//             ? <Component {...rest} />
//             : <Navigate to='/' />
//     )} />
// )

// export default LoggedOutRoute;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const LoggedOutRoute = ({ component: Component, isLoggedIn, ...rest }) => (

        !isLoggedIn
            ? <Outlet/>
            : <Navigate to='/' />

)

export default LoggedOutRoute;