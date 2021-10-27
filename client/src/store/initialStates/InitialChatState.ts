import { InitialUserDataState } from 'store/initialStates';

export const InitialChatState = {
    data: {
        chatList: [
            {
                id: '',
                userInfo: InitialUserDataState,
            },
        ],
        message: [
            {
                id: '',
                userId: '',
                text: '',
                createDate: '',
            },
        ],
    },
    isLoading: true,
};
