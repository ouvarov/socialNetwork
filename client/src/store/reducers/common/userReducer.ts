import { AUTH_TYPES } from 'store/const';
import { UserActionTypes, UserTypes } from 'store/types';

const userReducer = (user: UserTypes = { data: null, isLoading: true, isAuth: false }, action: UserActionTypes) => {
    switch (action.type) {
        case AUTH_TYPES.SET_USER:
            return { ...user, data: action.data, isLoading: false, isAuth: true };
        case AUTH_TYPES.CLEAN_USER:
            return { data: [], isLoading: true, isAuth: false };
        case AUTH_TYPES.NEED_AUTH:
            return { data: [], isLoading: false, isAuth: false };
        default:
            return user;
    }
};

export default userReducer;
