import { all } from 'redux-saga/effects';
import authSagas from './AuthSagas';
import ProfileSagas from './ProfileSagas';
import ErrorSagas from './ErrorSegas';
import ChatSagas from './ChatSagas';

export default function* rootSaga() {
    yield all([authSagas(), ProfileSagas(), ErrorSagas(), ChatSagas()]);
}
