import { CHAT_TYPES } from 'store/const';
import { ChatTypes } from 'store/types';

export const getAllCats = () => ({ type: CHAT_TYPES.GET_CHAT_LIST });
export const setChats = (data: ChatTypes) => ({ type: CHAT_TYPES.SET_CHAT_LIST, data });
