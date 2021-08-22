import { ACTIVE_TYPE } from 'store/const';
import { UserSingleType } from 'types';

export const setUsersList = (data: UserSingleType) => ({ type: ACTIVE_TYPE.ADD_USERS, data });
