import { api } from 'api';

import { AxiosResponse } from 'axios';
import { AuthTypes, AuthResponseTypes } from 'store/types';

export const loginUserService = (data: AuthTypes): Promise<AxiosResponse<AuthResponseTypes>> => {
    const { email, password } = data;

    return api.post('/login', { email, password });
};

export const checkAuthService = (): Promise<AxiosResponse<AuthResponseTypes>> => api.get('/refresh');

export const registrationUserService = (data: AuthTypes): Promise<AxiosResponse> => {
    const { email, password, userName } = data;

    return api.post<AuthTypes>('/registration', { email, password, userName });
};

export const logoutUserService = (): Promise<void> => api.post('/logout');
