import { InitialChatState } from 'store/initialStates';
import { ChatActionTypes, ChatTypes } from 'store/types';
import { CHAT_TYPES } from 'store/const';

const chatReducer = (chat: ChatTypes = InitialChatState, action: ChatActionTypes): ChatTypes => {
    switch (action.type) {
        case CHAT_TYPES.SET_CHAT_LIST:
            console.log(action.data);
            return {
                ...chat,
                data: {
                    chatList: [action.data],
                },
                isLoading: false,
            };
        default:
            return chat;
    }
};

export default chatReducer;
