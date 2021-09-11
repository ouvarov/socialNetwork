import { UserDataTypes } from 'store/types';

export type UsersListActions = {
    type: string;
    data: UserDataTypes[];
};
export type UsersListTypes = {
    data: UserDataTypes[];
    isLoading: boolean;
};
