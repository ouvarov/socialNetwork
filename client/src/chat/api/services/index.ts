import { api } from 'api';
import { AxiosResponse } from 'axios';

import { ChatResponseTypes } from 'store/types';

export const createChatService = (userId: string): Promise<AxiosResponse<{ id: string }>> =>
    api.post(`/createChat/${userId}`);
export const getAllChats = (): Promise<AxiosResponse<ChatResponseTypes>> => api.get('/chats');
export const getChat = (userId: string): Promise<AxiosResponse<any>> => api.get(`/getChat/${userId}`);
export const sendMessageService = (data: any): Promise<AxiosResponse> => {
    const { chatId, message } = data;

    return api.post<any>('/addMessage', { chatId, message });
};
