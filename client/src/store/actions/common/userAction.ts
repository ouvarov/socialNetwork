import { AUTH_TYPES } from 'store/const';
import { UserDataTypes, AuthTypes } from 'store/types';

export const setUser = (data: UserDataTypes) => ({ type: AUTH_TYPES.SET_USER, data });
export const cleanUser = () => ({ type: AUTH_TYPES.CLEAN_USER });
export const needAuth = () => ({ type: AUTH_TYPES.NEED_AUTH });
export const authSignIn = ({ email, password }: AuthTypes) => ({
    type: AUTH_TYPES.LOGIN,
    action: { email, password },
});
export const checkAuth = () => ({
    type: AUTH_TYPES.CHECK_AUTH,
});
export const logoutUser = () => ({ type: AUTH_TYPES.LOGOUT });
