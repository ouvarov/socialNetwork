import { all, call, takeLatest, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import { AUTH_TYPES } from 'store/const';
import { getError, needAuth, setUser } from 'store/actions';
import { AuthActionTypes, AuthResponseTypes, AuthTypes, SagaCallEffect } from 'store/types';
import { checkAuthService, loginUserService, logoutUserService, registrationUserService } from 'auth/api/services';

function* authLogInSaga({ action }: AuthActionTypes): any {
    const { email, password }: AuthTypes = action;

    try {
        const response = yield call<SagaCallEffect<Promise<AxiosResponse<AuthResponseTypes>>>>(loginUserService, {
            email,
            password,
        });

        if (response.data.accessToken) {
            localStorage.setItem('token', response.data.accessToken);
        }

        yield put(setUser(response.data.user));
    } catch ({ response }) {
        yield put(getError(response));
    }
}

function* authSignUpSaga({ action }: AuthActionTypes): any {
    const { email, password, userName }: AuthTypes = action;

    try {
        const response = yield call<SagaCallEffect<Promise<AxiosResponse<AuthResponseTypes>>>>(
            registrationUserService,
            {
                email,
                password,
                userName,
            },
        );

        yield put(setUser(response.data.user));

        localStorage.setItem('token', response.data.accessToken);
    } catch ({ response }) {
        yield put(getError(response));
    }
}

function* checkAuthUserSaga(): any {
    try {
        const response = yield call(checkAuthService);

        localStorage.setItem('token', response.data.accessToken);
        yield put(setUser(response.data.user));
    } catch {
        yield put(needAuth());
        localStorage.removeItem('token');
    }
}
function* logoutAuthUser(): any {
    try {
        yield call<SagaCallEffect<Promise<void>>>(logoutUserService);
        yield put(needAuth());
    } catch ({ response }) {
        yield put(getError(response));
    }
}

export default function* authSagas() {
    yield all([
        takeLatest(AUTH_TYPES.LOGIN, authLogInSaga),
        takeLatest(AUTH_TYPES.CHECK_AUTH, checkAuthUserSaga),
        takeLatest(AUTH_TYPES.LOGOUT, logoutAuthUser),
        takeLatest(AUTH_TYPES.SIGN_UP, authSignUpSaga),
    ]);
}
