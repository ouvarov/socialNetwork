import api from 'api';
import { AuthResponseType } from 'types';
import { AxiosResponse } from 'axios';

export const loginUser = (email: string, password: string): Promise<AxiosResponse<AuthResponseType>> =>
    api.post<AuthResponseType>('/login', { email, password });

export const registrationUser = (
    email: string,
    password: string,
    userName: string,
): Promise<AxiosResponse<AuthResponseType>> =>
    api.post<AuthResponseType>('/registration', { email, password, userName });

export const logoutUser = (): Promise<void> => api.post('/logout');
