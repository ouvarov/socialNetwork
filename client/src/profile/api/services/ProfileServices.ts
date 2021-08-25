import api from 'api';

export const getProfile = (userId: string): Promise<any> => api.get(`/profile/${userId}`);
