import { UserSingleType } from 'types';

export type UserActions = {
    type: string;
    data: UserSingleType[];
};
export type UserTypes = {
    data: UserSingleType[];
    isLoading: boolean;
    isAuth: boolean;
};
