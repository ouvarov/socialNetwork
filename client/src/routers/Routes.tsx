import React, { useEffect } from 'react';
import { Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { routePaths, AnonymousRoute, PrivateRoute } from 'routers';
import { LoginPage, SingUpPage, UsersListPage } from 'pages';
import { checkAuth } from '../api/helpers/checkAuth';

const Routes: React.FC = () => {
    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth();
        }
    }, [localStorage.getItem('token')]);

    return (
        <BrowserRouter>
            <Switch>
                <AnonymousRoute path={routePaths.loginPage()} component={() => <LoginPage />} />
                <AnonymousRoute path={routePaths.signUpPage()} component={() => <SingUpPage />} />
                <PrivateRoute path={routePaths.usersPage()} component={() => <UsersListPage />} />
                <Redirect from="/" to={routePaths.loginPage()} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
