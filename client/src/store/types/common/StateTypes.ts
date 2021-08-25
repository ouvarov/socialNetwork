import { ProfileTypes, UsersListTypes, UsersTypes } from 'store/types';

export type StateTypes = {
    usersList: UsersListTypes;
    user: UsersTypes;
    profile: ProfileTypes;
};
