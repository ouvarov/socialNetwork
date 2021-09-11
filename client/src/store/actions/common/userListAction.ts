import { ACTIVE_TYPE } from 'store/const';
import { UserDataTypes } from 'store/types';

export const setUsersList = (data: UserDataTypes) => ({ type: ACTIVE_TYPE.ADD_USERS, data });
