import { AxiosResponse } from 'axios';
import { all, call, takeLatest, put } from 'redux-saga/effects';

import { CHAT_TYPES } from 'store/const';
import { ChatDataTypes, ChatResponseTypes, ChatSagaTypes, SagaCallEffect } from 'store/types';
import { createChatService, getAllChats, getChat, sendMessageService } from 'chat/api/services';
import { setChat, setChats, setMessage } from 'store/actions';

function* getAllChatsSaga(): any {
    const response = yield call<SagaCallEffect<Promise<AxiosResponse<ChatResponseTypes>>>>(getAllChats);

    // @ts-ignore
    yield put(setChats({ chatList: response.data }));
}

function* createChatSaga({ action }: ChatSagaTypes): any {
    const { onComplete, userId } = action;
    const response = yield call<SagaCallEffect<Promise<AxiosResponse<{ id: string }>>>>(createChatService, userId);

    yield call<SagaCallEffect<ChatDataTypes>>(onComplete, response.data.id);
}

function* getChatSaga({ action }: ChatSagaTypes): any {
    const { chatId } = action;

    const response = yield call<SagaCallEffect<Promise<AxiosResponse<any>>>>(getChat, chatId);

    yield put(setChat({ chat: response.data }));
}

function* sendMessageSaga({ action }: ChatSagaTypes): any {
    const { chatId, message, onComplete } = action;

    const response = yield call<SagaCallEffect<Promise<AxiosResponse<ChatResponseTypes>>>>(sendMessageService, {
        chatId,
        message,
    });

    yield put(setMessage({ messages: response?.data?.messages }));

    yield call<SagaCallEffect<ChatDataTypes>>(onComplete);
}

export default function* ChatSagas() {
    yield all([takeLatest(CHAT_TYPES.GET_CHAT_LIST, getAllChatsSaga)]);
    yield all([takeLatest(CHAT_TYPES.CREATE_CHAT_LIST, createChatSaga)]);
    yield all([takeLatest(CHAT_TYPES.GET_CHAT, getChatSaga)]);
    yield all([takeLatest(CHAT_TYPES.SEND_MESSAGE, sendMessageSaga)]);
}
