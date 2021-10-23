import { all, takeLatest, put } from 'redux-saga/effects';

import { ErrorSagaTypes } from 'store/types/common/ErrorTypes';
import { ERROR_TYPES } from 'store/const';
import { setError } from 'store/actions';

function* setErrorSaga({ action }: any) {
    const { error } = action;

    yield put(setError(error.data.message));
}

export default function* ErrorSagas() {
    yield all([takeLatest(ERROR_TYPES.GET_ERROR, setErrorSaga)]);
}
