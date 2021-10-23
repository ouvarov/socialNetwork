import { ERROR_TYPES } from 'store/const';

export const getError = (error: any) => ({ type: ERROR_TYPES.GET_ERROR, action: { error } });
export const setError = (data: string) => ({ type: ERROR_TYPES.SET_ERROR, data });
export const removeError = () => ({ type: ERROR_TYPES.REMOVE_ERROR });
