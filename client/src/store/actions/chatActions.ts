import { CHAT_TYPES } from 'store/const';
import { ChatDataTypes, ChatItemTypes, ChatListTypes } from 'store/types';

export const getAllChats = () => ({ type: CHAT_TYPES.GET_CHAT_LIST });
export const setChats = (data: ChatListTypes[]) => ({ type: CHAT_TYPES.SET_CHAT_LIST, data });
export const createChat = ({ onComplete, userId }: ChatDataTypes) => ({
    type: CHAT_TYPES.CREATE_CHAT_LIST,
    action: { onComplete, userId },
});
export const getChat = (chatId: any) => ({ type: CHAT_TYPES.GET_CHAT, action: { chatId } });
export const setChat = (data: any) => ({ type: CHAT_TYPES.SET_CHAT, data });
export const sendMessage = ({ chatId, message, onComplete }: ChatDataTypes) => ({
    type: CHAT_TYPES.SEND_MESSAGE,
    action: { chatId, message, onComplete },
});
export const setMessage = (data: ChatItemTypes) => ({ type: CHAT_TYPES.SET_MESSAGE, data });
