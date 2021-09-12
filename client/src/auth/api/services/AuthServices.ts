import api from 'api';

import { AxiosResponse } from 'axios';
import { AuthTypes, AuthResponseTypes } from 'store/types';

export const loginUser = (data: AuthTypes): Promise<AxiosResponse<AuthResponseTypes>> => {
    const { email, password } = data;

    return api.post('/login', { email, password });
};

export const checkAuth = (): Promise<AxiosResponse<AuthResponseTypes>> => api.get('/refresh');

export const registrationUser = (data: AuthTypes): Promise<AxiosResponse> => {
    const { email, password, userName } = data;

    return api.post<AuthTypes>('/registration', { email, password, userName });
};

export const logoutUser = (): Promise<void> => api.post('/logout');
