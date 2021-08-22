import { ACTIVE_TYPE } from 'store/const';
import { UserActions, UserTypes } from 'store/types';

const userReducer = (user: UserTypes = { data: [], isLoading: true, isAuth: false }, action: UserActions) => {
    switch (action.type) {
        case ACTIVE_TYPE.SET_USER:
            return { ...user, data: action.data, isLoading: false, isAuth: true };
        default:
            return user;
    }
};

export default userReducer;
