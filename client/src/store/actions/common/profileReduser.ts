import { PROFILE_TYPE } from 'store/const';
import { UserDataTypes } from 'store/types';

export const setProfile = (data: UserDataTypes) => ({ type: PROFILE_TYPE.SET_PROFILE, data });
export const cleanProfile = () => ({ type: PROFILE_TYPE.CLEAN_PROFILE });
export const getProfile = (userId: string) => ({ type: PROFILE_TYPE.GET_PROFILE, action: { userId } });
