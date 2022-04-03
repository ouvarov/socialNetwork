import { InitialChatState } from 'store/initialStates';
import { ChatActionTypes, ChatTypes } from 'store/types';
import { CHAT_TYPES } from 'store/const';

const chatReducer = (chat: ChatTypes = InitialChatState, action: ChatActionTypes): ChatTypes => {
    switch (action.type) {
        case CHAT_TYPES.SET_CHAT_LIST:
            return {
                ...chat,
                data: {
                    chatList: [...action.data.chatList],
                },
                isLoading: false,
            };
        case CHAT_TYPES.SET_CHAT:
            return {
                ...chat,
                data: {
                    chat: {
                        ...action.data.chat,
                    },
                },
                isLoading: false,
            };
        case CHAT_TYPES.SET_MESSAGE:
            return {
                ...chat,
                data: {
                    chat: {
                        messages: [...action.data.messages],
                    },
                },
            };
        default:
            return chat;
    }
};

export default chatReducer;
