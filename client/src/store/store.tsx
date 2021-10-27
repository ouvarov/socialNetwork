import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from 'store/sagas/rootSaga';
import { userReducer, usersListReducer, profileReducer, errorReducer, chatReducer } from 'store/reducers';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
    usersList: usersListReducer,
    profile: profileReducer,
    user: userReducer,
    error: errorReducer,
    chat: chatReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
