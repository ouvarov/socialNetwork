import api from 'api';

import { AxiosResponse } from 'axios';
import { AuthTypes, AuthResponseTypes } from 'store/types';

export const loginUser = (data: AuthTypes): Promise<AxiosResponse<AuthResponseTypes>> => {
    const { email, password } = data;

    return api.post('/login', { email, password });
};

export const checkAuth = (): Promise<AxiosResponse<AuthResponseTypes>> => {
    return api.get('/refresh');
};

export const registrationUser = (email: string, password: string, userName: string): Promise<AxiosResponse> =>
    api.post<AuthTypes>('/registration', { email, password, userName });

export const logoutUser = (): Promise<void> => api.post('/logout');
