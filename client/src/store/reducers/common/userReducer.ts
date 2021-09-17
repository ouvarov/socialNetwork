import { AUTH_TYPES } from 'store/const';
import { UserActionTypes, UserTypes } from 'store/types';
import { InitialUserDataState, InitialUserState } from 'store/initialStates';

const userReducer = (user: UserTypes = InitialUserState, action: UserActionTypes): UserTypes => {
    switch (action.type) {
        case AUTH_TYPES.SET_USER:
            return { ...user, data: action.data, isLoading: false, isAuth: true };
        case AUTH_TYPES.CLEAN_USER:
            return InitialUserState;
        case AUTH_TYPES.NEED_AUTH:
            return {
                data: InitialUserDataState,
                isLoading: false,
                isAuth: false,
            };
        default:
            return user;
    }
};

export default userReducer;
