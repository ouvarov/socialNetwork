import { combineReducers, createStore } from 'redux';
import { userReducer, usersListReducer, profileReducer } from './reducers';

const reducers = combineReducers({
    usersList: usersListReducer,
    profile: profileReducer,
    user: userReducer,
});

const store = createStore(reducers);

export default store;
