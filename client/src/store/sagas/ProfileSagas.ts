import { all, call, takeLatest, put } from 'redux-saga/effects';
import { getProfile } from 'profile/api/services/ProfileServices';
import { PROFILE_TYPE } from 'store/const';
import { setProfile } from 'store/actions';
import { ProfileSagaTypes } from '../types';

function* getProfileSaga({ action }: ProfileSagaTypes): any {
    const { userId } = action;

    const response = yield call(getProfile, userId);

    yield put(setProfile(response.data));
}

export default function* ProfileSagas() {
    yield all([takeLatest(PROFILE_TYPE.GET_PROFILE, getProfileSaga)]);
}
