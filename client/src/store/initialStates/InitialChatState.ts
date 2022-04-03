import { InitialUserDataState } from 'store/initialStates';

export const InitialChatState = {
    data: {
        chatList: [
            {
                id: '',
                userInfo: InitialUserDataState,
            },
        ],
        chat: {
            id: '',
            users: [],
            messages: [
                {
                    id: '',
                    userInfo: InitialUserDataState,
                    text: '',
                    createDate: '',
                },
            ],
        },
    },
    isLoading: true,
};
