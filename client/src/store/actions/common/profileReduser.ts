import { PROFILE_TYPE } from 'store/const';
import { UserTypes } from 'types';

export const setProfile = (data: UserTypes) => ({ type: PROFILE_TYPE.SET_PROFILE, data });
export const cleanProfile = () => ({ type: PROFILE_TYPE.CLEAN_PROFILE });
