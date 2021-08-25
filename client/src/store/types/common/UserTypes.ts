import { UserTypes } from 'types';

export type UserActions = {
    type: string;
    data: UserTypes[];
};
export type ProfileActions = {
    type: string;
    data: { user: UserTypes; posts: any } | null;
};
export type UsersTypes = {
    data: UserTypes[];
    isLoading: boolean;
};
export type ProfileTypes = {
    data: { user: UserTypes; posts: any } | null;
    isLoading: boolean;
    isAuth: boolean;
};
