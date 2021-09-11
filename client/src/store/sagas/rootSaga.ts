import { all } from 'redux-saga/effects';
import authSagas from './AuthSagas';
import ProfileSagas from './ProfileSagas';

export default function* rootSaga() {
    yield all([authSagas(), ProfileSagas()]);
}
