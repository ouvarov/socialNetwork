import axios from 'axios';
import { API_URL } from '../constants';

const api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

api.interceptors.request.use(config => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export default api;
