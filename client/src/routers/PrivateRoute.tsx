import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { routePaths } from 'routers';

type PrivateRoutePropsType = {
    path: string;
    component: React.ComponentType<any>;
};

const PrivateRoute: React.FC<PrivateRoutePropsType> = ({ component: Component, ...restProps }) => {
    if (localStorage.getItem('token')) {
        return <Component {...restProps} />;
    }
    return <Redirect to={routePaths.loginPage()} />;
};

export default PrivateRoute;
