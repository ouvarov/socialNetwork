import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Switch, BrowserRouter } from 'react-router-dom';
import api from 'api';
import { routePaths, AnonymousRoute, PrivateRoute } from 'routers';
import { LoginPage, SingUpPage, UsersListPage, ProfilePage } from 'pages';
import { cleanProfile, setProfile } from 'store/actions';

const Routes: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            api.get('/refresh')
                .then(response => {
                    localStorage.setItem('token', response.data.accessToken);
                    dispatch(setProfile(response.data.user));
                })
                .catch(() => {
                    localStorage.removeItem('token');
                    dispatch(cleanProfile());
                });
        }
    }, []);

    return (
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
};

export default Routes;
