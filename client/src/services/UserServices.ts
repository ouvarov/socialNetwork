import { AxiosResponse } from 'axios';
import { UserTypes } from 'types';
import api from 'api';

const fetchUsers = (): Promise<AxiosResponse> => api.get<UserTypes[]>('/users');

export default { fetchUsers };
