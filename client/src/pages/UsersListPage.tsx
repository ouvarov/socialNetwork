import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUsersList } from 'store/actions';
import api from 'api';
import { Loading } from 'common/components';
import { StateTypes } from 'store/types';
import toDate from 'utils/helpers/toDate';
import routePaths from 'routers/routePaths';

const UsersListPage: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: StateTypes) => state.usersList.data);
    const isLoading = useSelector((state: StateTypes) => state.usersList.isLoading);

    useEffect(() => {
        api.get('/users').then(response => dispatch(setUsersList(response.data)));
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div>
            {users.map(({ id, imageUrl, userName, created, following, followers }) => (
                <div key={id}>
                    <figure style={{ background: imageUrl }} />
                    <Link to={routePaths.profilePage(id)}>{userName}</Link>
                    <p>{toDate(created)}</p>
                    <p>{following.length}</p>
                    <p>{followers.length}</p>
                </div>
            ))}
        </div>
    );
};

export default UsersListPage;
