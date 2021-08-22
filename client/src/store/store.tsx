import { combineReducers, createStore } from 'redux';
import { userReducer, usersListReducer } from './reducers';

const reducers = combineReducers({
    usersList: usersListReducer,
    user: userReducer,
});

const store = createStore(reducers);

export default store;
