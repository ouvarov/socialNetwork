import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersList } from 'store/actions';
import api from 'api';
import { Loading } from 'common/components';
import { StateTypes } from 'store/types';

const UsersListPage: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: StateTypes) => state.usersList.data);

    useEffect(() => {
        api.get('/users').then(response => dispatch(setUsersList(response.data)));
    }, []);

    if (!users.length) return <Loading />;

    return (
        <div>
            {users.map(({ _id }) => (
                <div key={_id}>{_id}</div>
            ))}
        </div>
    );
};

export default UsersListPage;
