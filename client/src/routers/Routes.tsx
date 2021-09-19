import React from 'react';
import { Redirect, Switch, BrowserRouter } from 'react-router-dom';

import { routePaths, AnonymousRoute, PrivateRoute } from 'routers';
import { LoginPage, SingUpPage, UsersListPage, ProfilePage } from 'pages';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <AnonymousRoute path={routePaths.loginPage()} component={() => <LoginPage />} />
            <AnonymousRoute path={routePaths.signUpPage()} component={() => <SingUpPage />} />
            <PrivateRoute path={routePaths.usersPage()} component={() => <UsersListPage />} />
            <PrivateRoute path={routePaths.profilePage(':userId')} component={() => <ProfilePage />} />
            <Redirect from="/" to={routePaths.loginPage()} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
