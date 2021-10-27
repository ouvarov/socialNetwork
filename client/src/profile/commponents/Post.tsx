import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Textarea, Input, Button, PostIcon } from 'common/components';

import { StateTypes } from 'store/types';
import { addPost, deletePost, likePost } from 'store/actions';

import { changePost, changePostText } from 'profile/api/sockets';
import { socket } from 'api';
import { SOCKET_CONSTANTS } from 'api/constants';

type PostPropsType = {
    userId: string;
};

const Post: React.FC<PostPropsType> = ({ userId }) => {
    const [image, setImage] = useState<string>('');
    const [text, setText] = useState<string>('');
    const [printPost, setPrintPost] = useState<boolean>(false);

    const dispatch = useDispatch();
    const posts = useSelector((state: StateTypes) => state.profile.data?.posts);
    const user = useSelector((state: StateTypes) => state.user?.data?.id);

    const isOwnerPost = user === userId;
    const isDisabled = ![image, text].every(Boolean);

    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        changePostText(userId);
    };

    const onCompletePost = (): void => {
        setImage('');
        setText('');
        changePost(userId);
    };

    const onDeletePostClick = (postId: string, userId: string): void => {
        dispatch(
            deletePost({
                postId,
                userId,
                onComplete: () => {
                    changePost(userId);
                },
            }),
        );
    };

    const onLikePostClick = (postId: string, userId: string): void => {
        dispatch(
            likePost({
                postId,
                userId,
                onComplete: () => {
                    changePost(userId);
                },
            }),
        );
    };

    const handleOnAddPostClick = () => {
        dispatch(addPost({ image, text, userId }, onCompletePost));
    };

    useEffect(() => {
        const handleUpdatePostText = () => {
            setPrintPost(true);
            setTimeout(setPrintPost, 5000, false);
        };

        socket.on(SOCKET_CONSTANTS.UPDATE_POST_TEXT, handleUpdatePostText);

        return () => {
            socket.off(SOCKET_CONSTANTS.UPDATE_POST_TEXT, handleUpdatePostText);
        };
    }, []);

    return (
        <div>
            {isOwnerPost && (
                <div>
                    <Input name="icon" id="icon" onChange={(e): void => setImage(e.target.value)} value={image} />
                    <Textarea name="text" id="text" onChange={(e): void => onChangeText(e)} value={text} />
                    <Button isDisabled={isDisabled} onClick={handleOnAddPostClick}>
                        Add Post
                    </Button>
                </div>
            )}
            {printPost && <div style={{ color: '#fff' }}>User print post</div>}
            {!!posts?.length && (
                <div>
                    {posts.map(({ image, id, likes, text, ownerId }) => (
                        <div key={id}>
                            <PostIcon imageUrl={image} />
                            <p>{text}</p>
                            <Button
                                onClick={(): void => {
                                    onLikePostClick(id, userId);
                                }}
                            >
                                Like {likes}
                            </Button>
                            {isOwnerPost && (
                                <Button
                                    onClick={(e): void => {
                                        onDeletePostClick(id, ownerId);
                                    }}
                                >
                                    Delete Post
                                </Button>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Post;
