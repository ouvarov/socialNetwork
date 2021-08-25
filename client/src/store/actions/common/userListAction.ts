import { ACTIVE_TYPE } from 'store/const';
import { UserTypes } from 'types';

export const setUsersList = (data: UserTypes) => ({ type: ACTIVE_TYPE.ADD_USERS, data });
