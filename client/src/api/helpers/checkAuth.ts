import api from 'api';

export const checkAuth = () => {
    api.get('/refresh')
        .then(response => {
            localStorage.setItem('token', response.data.accessToken);
        })
        .catch(() => localStorage.removeItem('token'));
};
