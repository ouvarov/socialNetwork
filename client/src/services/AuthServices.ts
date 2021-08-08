import { AxiosResponse } from 'axios';
import api from '../http';
import { AuthResponseType } from '../types';

const loginUser = (email: string, password: string): Promise<AxiosResponse<AuthResponseType>> =>
    api.post<AuthResponseType>('/login', { email, password });

const registrationUser = (
    email: string,
    password: string,
    userName: string,
): Promise<AxiosResponse<AuthResponseType>> =>
    api.post<AuthResponseType>('/registration', { email, password, userName });

const logoutUser = (): Promise<void> => api.post('/logout');

export default { loginUser, registrationUser, logoutUser };
