import { UserSingleType } from 'types';

export type UsersListActions = {
    type: string;
    data: UserSingleType[];
};
export type UsersListTypes = {
    data: UserSingleType[];
    isLoading: boolean;
};
