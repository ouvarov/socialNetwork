import { AxiosResponse } from 'axios';
import { UserDataTypes } from 'store/types';
import api from 'api';

const fetchUsers = (): Promise<AxiosResponse> => api.get<UserDataTypes[]>('/users');

export default { fetchUsers };
