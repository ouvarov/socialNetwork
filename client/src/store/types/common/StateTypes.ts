import { ProfileTypes, UsersListTypes, UserTypes } from 'store/types';

export type StateTypes = {
    usersList: UsersListTypes;
    user: UserTypes;
    profile: ProfileTypes;
};
