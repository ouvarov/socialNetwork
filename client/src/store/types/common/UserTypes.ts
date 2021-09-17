import { UserDataTypes } from 'store/types';

export type UserActionTypes = {
    type: string;
    data: UserDataTypes;
};
export type UserTypes = {
    data: UserDataTypes;
    isLoading: boolean;
    isAuth: boolean;
};
