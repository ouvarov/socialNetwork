import { UserDataTypes } from 'store/types';

export type ChatTypes = {
    data: {
        chatList: ChatListTypes[];
        message: MessageTypes[];
    };
    isLoading: boolean;
};

export type ChatListTypes = {
    id: string;
    userInfo: UserDataTypes;
};

export type MessageTypes = {
    id: string;
    userId: string;
    text: string;
    createDate: string;
};

export type ChatActionTypes = {
    type: string;
    data: any;
};

export type ChatResponseTypes = {
    data: {
        id: string;
        userInfo: UserDataTypes;
    };
};
