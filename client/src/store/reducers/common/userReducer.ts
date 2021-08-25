import { ACTIVE_TYPE } from 'store/const';
import { UserActions, UsersTypes } from 'store/types';

const userReducer = (user: UsersTypes = { data: [], isLoading: true }, action: UserActions) => {
    switch (action.type) {
        case ACTIVE_TYPE.SET_USER:
            return { ...user, data: action.data, isLoading: false };
        case ACTIVE_TYPE.CLEAN_USER:
            return { data: [], isLoading: true };
        default:
            return user;
    }
};

export default userReducer;
