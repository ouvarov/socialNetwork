import { ProfileTypes, UsersListTypes, UserTypes, ErrorTypes } from 'store/types';

export type StateTypes = {
    usersList: UsersListTypes;
    user: UserTypes;
    profile: ProfileTypes;
    error: ErrorTypes;
};
