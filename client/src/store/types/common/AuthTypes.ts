import { SagaGenerator } from 'typed-redux-saga';
import { SagaReturnType } from 'redux-saga/effects';
import { UserDataTypes } from 'store/types';

export type AuthActionTypes = {
    type: string;
    action: AuthTypes;
};

export type AuthResponseTypes = {
    accessToken: string;
    refreshToken: string;
    data: {
        user: UserDataTypes;
        message?: string;
    };
};

export type AuthTypes = {
    email?: string;
    password?: string;
    accessToken?: string;
    userName?: string;
};

export type CallAnyType = any;
export type Saga<T> = SagaGenerator<SagaReturnType<() => T>, CallAnyType>;
export type SagaCallEffect<TR> = (...args: CallAnyType[]) => TR;
