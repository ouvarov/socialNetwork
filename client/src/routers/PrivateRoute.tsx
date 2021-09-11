import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { routePaths } from 'routers';
import { StateTypes } from 'store/types';

interface PrivateRoutePropsType extends RouteProps {
    component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRoutePropsType> = ({ component: Component, ...restProps }) => {
    const isAuth = useSelector((state: StateTypes) => state.user.isAuth);

    if (isAuth) {
        return (
            <Route {...restProps}>
                <Component />
            </Route>
        );
    }
    return <Redirect to={routePaths.loginPage()} />;
};

export default PrivateRoute;
