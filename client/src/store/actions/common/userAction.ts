import { ACTIVE_TYPE } from 'store/const';
import { UserSingleType } from 'types';

export const setUser = (data: UserSingleType) => ({ type: ACTIVE_TYPE.SET_USER, data });
