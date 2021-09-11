import { UserDataTypes } from 'store/types';

export type UserActionTypes = {
    type: string;
    data: UserDataTypes[];
};
export type UserTypes = {
    data: UserDataTypes | null;
    isLoading: boolean;
    isAuth: boolean;
};
