import { AxiosResponse } from 'axios';
import { UserSingleType } from 'types';
import api from 'api';

const fetchUsers = (): Promise<AxiosResponse> => api.get<UserSingleType[]>('/users');

export default { fetchUsers };
