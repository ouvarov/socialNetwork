import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes } from 'routers';

import { StateTypes } from 'store/types';
import { checkAuth, needAuth } from 'store/actions';
import { Loading } from 'common/components';
import 'App.sass';

const App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state: StateTypes) => state.user.isLoading);

    useLayoutEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(checkAuth());
        } else {
            dispatch(needAuth());
        }
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="App">
            <Routes />
        </div>
    );
};

export default App;
