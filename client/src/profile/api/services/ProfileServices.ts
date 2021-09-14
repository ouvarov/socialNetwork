import api from 'api';
import { AxiosResponse } from 'axios';
import { AuthResponseTypes, PostDataType, PostTypes } from 'store/types';

export const getProfileService = (userId: string): Promise<AxiosResponse<AuthResponseTypes>> =>
    api.get(`/profile/${userId}`);

export const addPostService = (data: PostDataType): Promise<AxiosResponse<PostTypes>> => {
    const { userId, text, image } = data;

    return api.post(`/addPost/${userId}`, { text, image });
};

export const deletePostService = (postId: string): Promise<AxiosResponse<PostTypes>> => {
    return api.delete(`/deletePost/${postId}`);
};
