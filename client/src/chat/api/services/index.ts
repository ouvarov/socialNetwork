import { api } from 'api';
import { AxiosResponse } from 'axios';

import { ChatResponseTypes } from 'store/types';

export const createChatService = (userId: string) => api.post(`/createChat/${userId}`);
export const getAllChats = (): Promise<AxiosResponse<ChatResponseTypes>> => api.get('/chats');
