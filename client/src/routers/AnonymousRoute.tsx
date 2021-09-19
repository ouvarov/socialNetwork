import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { routePaths } from 'routers';
import { StateTypes } from 'store/types';

interface AnonymousRoutePropsType extends RouteProps {
    component: React.ComponentType;
}

const AnonymousRoute: React.FC<AnonymousRoutePropsType> = ({ component: Component, ...restProps }) => {
    const isAuth = useSelector((state: StateTypes) => state.user.isAuth);
    const id = useSelector((state: StateTypes) => state.user.data?.id);

    if (isAuth) {
        return (
            <Route {...restProps}>
                <Redirect to={routePaths.profilePage(id || '')} />
            </Route>
        );
    }
    return (
        <Route {...restProps}>
            <Component />
        </Route>
    );
};

export default AnonymousRoute;
