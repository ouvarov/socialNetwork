import { UserDataTypes } from 'store/types';

export type ChatTypes = {
    data: {
        chatList?: ChatListTypes[];
        chat?: ChatItemTypes;
    };
    isLoading: boolean;
};

export type ChatItemTypes = {
    id?: string;
    users?: Array<string>;
    messages?: Array<MessageTypes>;
};

export type ChatListTypes = {
    id: string;
    userInfo: UserDataTypes;
};

export type MessageTypes = {
    id: string;
    userInfo: UserDataTypes;
    text: string;
    createDate: string;
};

export type ChatActionTypes = {
    type: string;
    data: {
        chatList: ChatListTypes[];
        chat: ChatItemTypes;
        messages: MessageTypes[];
    };
};

export type ChatResponseTypes = {
    data: {
        id: string;
        userInfo: UserDataTypes;
        messages: Array<MessageTypes>;
    };
};

export type ChatSagaTypes = {
    type: string;
    action: { onComplete?: any; chatId?: string; userId?: string; message?: string };
};

export type ChatDataTypes = {
    onComplete?: any;
    userId?: string;
    chatId?: string;
    message?: string;
};
