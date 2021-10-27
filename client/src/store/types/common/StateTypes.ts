import { ProfileTypes, UsersListTypes, UserTypes, ErrorTypes, ChatTypes } from 'store/types';

export type StateTypes = {
    usersList: UsersListTypes;
    user: UserTypes;
    profile: ProfileTypes;
    error: ErrorTypes;
    chat: ChatTypes;
};
