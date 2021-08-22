import React from 'react';
import { Redirect, Route } from 'react-router-dom';

type AnonymousRoutePropsType = {
    path: string;
    component: React.ComponentType;
};
const AnonymousRoute: React.FC<AnonymousRoutePropsType> = ({ component: Component, ...restProps }) => {
    if (localStorage.getItem('token')) {
        return <Redirect to="/users" />;
    }
    return <Component {...restProps} />;
};

export default AnonymousRoute;
