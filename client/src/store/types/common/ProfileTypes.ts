import { UserDataTypes } from 'store/types';

export type PostTypes = {
    image: string;
    _id: string;
    likes: [];
    text: string;
};

export type ProfileTypes = {
    data: { user: UserDataTypes; posts: PostTypes[] } | null;
    isLoading: boolean;
};

export type ProfileActionTypes = {
    type: string;
    data: { user: UserDataTypes; posts: any } | null;
};
export type ProfileSagaTypes = {
    type: string;
    action: { userId: string };
};
