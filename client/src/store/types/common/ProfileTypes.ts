import { PostTypes, UserDataTypes } from 'store/types';

export type ProfileTypes = {
    data?: { user: UserDataTypes | null; posts: PostTypes[] };
    isLoading?: boolean;
};

export type ProfileActionTypes = {
    type: string;
    data: { user: UserDataTypes; posts: PostTypes[] };
};
export type ProfileSagaTypes = {
    type: string;
    action: { userId: string; postId: string; onComplete: any; changeProfile: any };
};
