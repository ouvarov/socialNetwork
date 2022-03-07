import React from 'react';
import { Redirect, Switch, BrowserRouter } from 'react-router-dom';

import { routePaths, AnonymousRoute, PrivateRoute } from 'routers';

import { UsersListPage } from 'pages';
import { Login, SingUp } from 'auth';
import Profile from 'profile';
import { ChatList, Chat } from 'chat';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <AnonymousRoute path={routePaths.loginPage()} component={() => <Login />} />
            <AnonymousRoute path={routePaths.signUpPage()} component={() => <SingUp />} />
            <PrivateRoute path={routePaths.usersPage()} component={() => <UsersListPage />} />
            <PrivateRoute path={routePaths.profilePage(':userId')} component={() => <Profile />} />
            <PrivateRoute path={routePaths.chatsPage()} component={() => <ChatList />} />
            <PrivateRoute path={routePaths.chatPage(':chatId')} component={() => <Chat />} />
            <Redirect from="/" to={routePaths.loginPage()} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
