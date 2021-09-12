import { all, call, takeLatest, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { AUTH_TYPES } from 'store/const';
import { needAuth, setUser } from 'store/actions';
import { AuthActionTypes, AuthResponseTypes, AuthTypes, SagaCallEffect } from 'store/types';
import { checkAuth, loginUser, logoutUser, registrationUser } from 'auth/api/services/AuthServices';

function* authLogInSaga({ action }: AuthActionTypes): any {
    const { email, password }: AuthTypes = action;

    try {
        const response = yield call<SagaCallEffect<Promise<AxiosResponse<AuthResponseTypes>>>>(loginUser, {
            email,
            password,
        });

        if (response.data.accessToken) {
            localStorage.setItem('token', response.data.accessToken);
        }

        yield put(setUser(response.data.user));
    } catch ({ response }) {
        console.log(response);
    }
}

function* authSignUpSaga({ action }: AuthActionTypes): any {
    const { email, password, userName }: AuthTypes = action;

    try {
        const response = yield call<SagaCallEffect<Promise<AxiosResponse<AuthResponseTypes>>>>(registrationUser, {
            email,
            password,
            userName,
        });

        yield put(setUser(response.data.user));

        localStorage.setItem('token', response.data.accessToken);
    } catch ({ response }) {
        console.log(response);
    }
}

function* checkAuthUserSaga(): any {
    try {
        const response = yield call<SagaCallEffect<Promise<AxiosResponse<AuthResponseTypes>>>>(checkAuth);

        localStorage.setItem('token', response.data.accessToken);
        yield put(setUser(response.data.user));
    } catch {
        yield put(needAuth());
        localStorage.removeItem('token');
    }
}
function* logoutAuthUser(): any {
    yield call<SagaCallEffect<Promise<void>>>(logoutUser);
    yield put(needAuth());
}

export default function* authSagas() {
    yield all([
        takeLatest(AUTH_TYPES.LOGIN, authLogInSaga),
        takeLatest(AUTH_TYPES.CHECK_AUTH, checkAuthUserSaga),
        takeLatest(AUTH_TYPES.LOGOUT, logoutAuthUser),
        takeLatest(AUTH_TYPES.SIGN_UP, authSignUpSaga),
    ]);
}
