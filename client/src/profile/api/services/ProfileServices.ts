import api from 'api';
import { AxiosResponse } from 'axios';
import { AuthResponseTypes } from 'store/types';

export const getProfile = (userId: string): Promise<AxiosResponse<AuthResponseTypes>> => api.get(`/profile/${userId}`);
