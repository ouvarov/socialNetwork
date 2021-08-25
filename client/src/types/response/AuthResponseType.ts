import { UserTypes } from 'types';

export type AuthResponseType = {
    accessToken: string;
    refreshToken: string;
    data: {
        user: UserTypes;
        post: any;
    };
};
