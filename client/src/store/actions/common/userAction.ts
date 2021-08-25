import { ACTIVE_TYPE } from 'store/const';
import { UserTypes } from 'types';

export const setUser = (data: UserTypes) => ({ type: ACTIVE_TYPE.SET_USER, data });
export const cleanUser = () => ({ type: ACTIVE_TYPE.CLEAN_USER });
