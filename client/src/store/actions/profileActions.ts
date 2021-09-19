import { PROFILE_TYPE } from 'store/const';
import { PostDataType, UserDataTypes } from 'store/types';

export const setProfile = (data: UserDataTypes) => ({ type: PROFILE_TYPE.SET_PROFILE, data });
export const cleanProfile = () => ({ type: PROFILE_TYPE.CLEAN_PROFILE });
export const getProfile = (userId: string) => ({ type: PROFILE_TYPE.GET_PROFILE, action: { userId } });

export const addPost = ({ image, text, userId }: PostDataType, onComplete: any) => ({
    type: PROFILE_TYPE.ADD_POST,
    action: { image, text, userId, onComplete },
});
export const deletePost = ({ postId, userId }: PostDataType) => ({
    type: PROFILE_TYPE.DELETE_POST,
    action: { postId, userId },
});
export const likePost = ({ postId, userId }: PostDataType) => ({
    type: PROFILE_TYPE.LIKE_POST,
    action: { postId, userId },
});

export const follow = (userId: string) => ({
    type: PROFILE_TYPE.FOLLOW,
    action: { userId },
});
