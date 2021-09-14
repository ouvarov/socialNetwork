import { AxiosResponse } from 'axios';
import { all, call, takeLatest, put } from 'redux-saga/effects';
import { addPostService, deletePostService, getProfileService } from 'profile/api/services/ProfileServices';
import { PROFILE_TYPE } from 'store/const';
import { getProfile, setProfile } from 'store/actions';
import { PostActionTypes, PostTypes } from 'store/types/common/PostTypes';
import { ProfileSagaTypes } from 'store/types/common/ProfileTypes';
import { SagaCallEffect } from 'store/types/common/AuthTypes';

function* getProfileSaga({ action }: ProfileSagaTypes): any {
    const { userId } = action;

    const response = yield call(getProfileService, userId);

    yield put(setProfile(response.data));
}
function* setPostSaga({ action }: PostActionTypes): any {
    const { text, image, userId } = action;

    yield call<SagaCallEffect<Promise<AxiosResponse<PostTypes>>>>(addPostService, { text, image, userId });
    if (userId) {
        yield put(getProfile(userId));
    }
}
function* deletePostSaga({ action }: ProfileSagaTypes): any {
    const { postId, userId } = action;

    yield call<SagaCallEffect<Promise<AxiosResponse<PostTypes>>>>(deletePostService, postId);
    yield put(getProfile(userId));
}

export default function* ProfileSagas() {
    yield all([
        takeLatest(PROFILE_TYPE.GET_PROFILE, getProfileSaga),
        takeLatest(PROFILE_TYPE.ADD_POST, setPostSaga),
        takeLatest(PROFILE_TYPE.DELETE_POST, deletePostSaga),
    ]);
}
