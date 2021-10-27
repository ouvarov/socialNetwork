import { AxiosResponse } from 'axios';
import { all, call, takeLatest, put } from 'redux-saga/effects';

import { CHAT_TYPES } from 'store/const';
import { ChatResponseTypes, SagaCallEffect } from 'store/types';
import { getAllChats } from 'chat/api/services';
import { setChats } from 'store/actions';

function* getAllChatsSaga(): any {
    const response = yield call<SagaCallEffect<Promise<AxiosResponse<ChatResponseTypes>>>>(getAllChats);

    yield put(setChats(response.data));
}

export default function* ChatSagas() {
    yield all([takeLatest(CHAT_TYPES.GET_CHAT_LIST, getAllChatsSaga)]);
}
