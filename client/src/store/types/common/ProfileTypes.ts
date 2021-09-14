import { PostTypes, UserDataTypes } from 'store/types';

export type ProfileTypes = {
    data: { user: UserDataTypes; posts: PostTypes[] } | null;
    isLoading: boolean;
};

export type ProfileActionTypes = {
    type: string;
    data: { user: UserDataTypes; posts: PostTypes[] } | null;
};
export type ProfileSagaTypes = {
    type: string;
    action: { userId: string; postId: string };
};
