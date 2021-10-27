import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCats } from 'store/actions';
import { StateTypes } from 'store/types';

const ChatList: React.FC = () => {
    const dispatch = useDispatch();
    const chat = useSelector((state: StateTypes) => state.chat.chatList);

    console.log(!!chat.length);
    useEffect(() => {
        dispatch(getAllCats());
    }, []);
    return <div>valera</div>;
};

export default ChatList;
