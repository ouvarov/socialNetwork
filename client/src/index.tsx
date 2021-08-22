import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import store from 'store/store';
import { historyManager } from 'utils';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={historyManager.history}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
