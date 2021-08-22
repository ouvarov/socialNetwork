import { UserSingleType } from 'types';

export type AuthResponseType = {
    accessToken: string;
    refreshToken: string;
    user: UserSingleType;
};
