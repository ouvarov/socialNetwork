import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { routePaths } from 'routers';

import { getAllChats } from 'store/actions';
import { StateTypes } from 'store/types';

import { Loading, UserIcon } from 'common/components';

const ChatList: React.FC = () => {
    const dispatch = useDispatch();
    const chat = useSelector((state: StateTypes) => state.chat.data.chatList);
    const isLoading = useSelector((state: StateTypes) => state.chat.isLoading);

    useEffect(() => {
        dispatch(getAllChats());
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div>
            {chat?.map(({ id, userInfo }) => (
                <Link to={routePaths.chatPage(id)} key={id}>
                    <UserIcon imageUrl={userInfo.imageUrl} />
                    <p>{userInfo.userName}</p>
                </Link>
            ))}
        </div>
    );
};

export default ChatList;
