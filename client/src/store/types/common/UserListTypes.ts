import { UserTypes } from 'types';

export type UsersListActions = {
    type: string;
    data: UserTypes[];
};
export type UsersListTypes = {
    data: UserTypes[];
    isLoading: boolean;
};
