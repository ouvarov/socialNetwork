import { AxiosResponse } from 'axios';
import { all, call, takeLatest, put } from 'redux-saga/effects';

import {
    addPostService,
    deletePostService,
    followProfileService,
    getProfileService,
    likePostService,
} from 'profile/api/services';
import { PROFILE_TYPE } from 'store/const';
import { getError, getProfile, setProfile } from 'store/actions';
import { PostActionTypes, PostDataType, PostTypes } from 'store/types/common/PostTypes';
import { ProfileSagaTypes } from 'store/types/common/ProfileTypes';
import { AuthResponseTypes, SagaCallEffect } from 'store/types/common/AuthTypes';

function* getProfileSaga({ action }: ProfileSagaTypes): any {
    const { userId } = action;

    try {
        const response = yield call<SagaCallEffect<Promise<AxiosResponse<AuthResponseTypes>>>>(
            getProfileService,
            userId,
        );

        yield put(setProfile(response.data));
    } catch ({ response }) {
        yield put(getError(response));
    }
}
function* setPostSaga({ action }: PostActionTypes): any {
    const { text, image, userId, onComplete } = action;

    try {
        yield call<SagaCallEffect<Promise<AxiosResponse<PostTypes>>>>(addPostService, {
            text,
            image,
            userId,
        });

        if (userId) {
            yield put(getProfile(userId));
        }

        yield call<SagaCallEffect<PostDataType>>(onComplete);
    } catch ({ response }) {
        yield put(getError(response));
    }
}
function* deletePostSaga({ action }: ProfileSagaTypes): any {
    const { postId, userId, onComplete } = action;

    try {
        yield call<SagaCallEffect<Promise<AxiosResponse<PostTypes>>>>(deletePostService, postId);
        yield put(getProfile(userId));
        yield call<SagaCallEffect<PostDataType>>(onComplete);
    } catch ({ response }) {
        yield put(getError(response));
    }
}

function* likePostSaga({ action }: ProfileSagaTypes): any {
    const { postId = '', userId, onComplete } = action;

    try {
        yield call(likePostService, postId);

        yield put(getProfile(userId));
        yield call<SagaCallEffect<PostDataType>>(onComplete);
    } catch ({ response }) {
        yield put(getError(response));
    }
}

function* followProfileSaga({ action }: ProfileSagaTypes): any {
    const { userId, changeProfile } = action;

    try {
        yield call(followProfileService, userId);
        yield put(getProfile(userId));
        yield call<SagaCallEffect<PostDataType>>(changeProfile);
    } catch ({ response }) {
        yield put(getError(response));
    }
}

export default function* ProfileSagas() {
    yield all([
        takeLatest(PROFILE_TYPE.GET_PROFILE, getProfileSaga),
        takeLatest(PROFILE_TYPE.ADD_POST, setPostSaga),
        takeLatest(PROFILE_TYPE.DELETE_POST, deletePostSaga),
        takeLatest(PROFILE_TYPE.LIKE_POST, likePostSaga),
        takeLatest(PROFILE_TYPE.FOLLOW, followProfileSaga),
    ]);
}
