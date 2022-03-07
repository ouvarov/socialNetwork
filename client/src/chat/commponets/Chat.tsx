import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import { Textarea, Button, UserIcon } from 'common/components';

import { getChat, sendMessage } from 'store/actions';
import { StateTypes } from 'store/types';

import { socket } from 'api';
import { SOCKET_CONSTANTS } from 'api/constants';
import { addMessage, joinMessage, printingMessage } from 'chat/sockets';

const Chat: React.FC = () => {
    const [textareaValue, setTextareaValue] = useState<string>('');
    const [printMessage, setPrintMessage] = useState<boolean>(false);
    const { chatId } = useParams<{ chatId: string }>();
    const messages = useSelector((state: StateTypes) => state.chat.data.chat?.messages);
    const userId = useSelector((state: StateTypes) => state.user.data.id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChat(chatId));
    }, []);

    useEffect(() => {
        const handleUpdateProfile = () => {
            dispatch(getChat(chatId));
        };

        joinMessage(chatId);

        socket.on(SOCKET_CONSTANTS.UPDATE_CHAT, handleUpdateProfile);

        return () => {
            socket.off(SOCKET_CONSTANTS.UPDATE_CHAT, handleUpdateProfile);
        };
    }, []);

    useEffect(() => {
        const handleUpdateMessageText = () => {
            setPrintMessage(true);
            setTimeout(setPrintMessage, 5000, false);
        };

        socket.on(SOCKET_CONSTANTS.UPDATE_MESSAGE, handleUpdateMessageText);

        return () => {
            socket.off(SOCKET_CONSTANTS.UPDATE_MESSAGE, handleUpdateMessageText);
        };
    }, []);

    const onComplete = (): void => {
        setTextareaValue('');
        addMessage(chatId);
    };

    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setTextareaValue(e.target.value);
        printingMessage(chatId);
    };

    const handleOnClick = (): void => {
        dispatch(sendMessage({ chatId, message: textareaValue, onComplete }));
    };

    return (
        <section className="messages">
            <div className="messages__wrap">
                {messages?.map(({ createDate, text, userInfo }) => {
                    const { imageUrl, userName, id } = userInfo;
                    const isOwnerMessage = userId === id;

                    const messageWrapClassNames = classNames('messages__item', {
                        'messages__item--right': isOwnerMessage,
                    });

                    return (
                        <div key={createDate} className={messageWrapClassNames}>
                            <div>
                                <UserIcon imageUrl={imageUrl} />
                                <p>{userName}</p>
                            </div>
                            <div>
                                <p>{text}</p>
                                <p>{createDate}</p>
                            </div>
                        </div>
                    );
                })}
                {printMessage && <p style={{ color: '#fff' }}>user print message</p>}
            </div>
            <footer className="messages__footer">
                <Textarea
                    className="messages__textarea"
                    id="chat"
                    name="chat"
                    onChange={handleOnChange}
                    value={textareaValue}
                />
                <Button onClick={handleOnClick}>send</Button>
            </footer>
        </section>
    );
};

export default Chat;
