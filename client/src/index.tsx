import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import store from 'store/store';

import App from './App';
import { Alert } from './common/components';

export const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <Alert />
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
