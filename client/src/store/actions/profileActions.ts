import { PROFILE_TYPE } from 'store/const';
import { PostDataType, UserDataTypes } from 'store/types';

export const setProfile = (data: UserDataTypes) => ({ type: PROFILE_TYPE.SET_PROFILE, data });
export const cleanProfile = () => ({ type: PROFILE_TYPE.CLEAN_PROFILE });
export const getProfile = (userId: string) => ({ type: PROFILE_TYPE.GET_PROFILE, action: { userId } });

export const addPost = ({ image, text, userId }: PostDataType, onComplete: any) => ({
    type: PROFILE_TYPE.ADD_POST,
    action: { image, text, userId, onComplete },
});
export const deletePost = ({ postId, userId, onComplete }: PostDataType) => ({
    type: PROFILE_TYPE.DELETE_POST,
    action: { postId, userId, onComplete },
});
export const likePost = ({ postId, userId, onComplete }: PostDataType) => ({
    type: PROFILE_TYPE.LIKE_POST,
    action: { postId, userId, onComplete },
});

export const follow = (userId: string, changeProfile: any) => ({
    type: PROFILE_TYPE.FOLLOW,
    action: { userId, changeProfile },
});
