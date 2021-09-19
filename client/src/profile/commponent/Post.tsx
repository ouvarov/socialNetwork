import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Textarea, Input, Button, PostIcon } from 'common/components';

import { StateTypes } from 'store/types';
import { addPost, deletePost, likePost } from 'store/actions';

type PostPropsType = {
    userId: string;
};

const Post: React.FC<PostPropsType> = ({ userId }) => {
    const [image, setImage] = useState<string>('');
    const [text, setText] = useState<string>('');

    const dispatch = useDispatch();
    const posts = useSelector((state: StateTypes) => state.profile.data?.posts);
    const user = useSelector((state: StateTypes) => state.user?.data?.id);

    const isOwnerPost = user === userId;
    const isDisabled = ![image, text].every(Boolean);

    const onCompletePost = (): void => {
        setImage('');
        setText('');
    };

    const onDeletePostClick = (postId: string, userId: string): void => {
        dispatch(deletePost({ postId, userId }));
    };

    const onLikePostClick = (postId: string, userId: string): void => {
        dispatch(likePost({ postId, userId }));
    };

    const handleOnAddPostClick = (): void => {
        dispatch(addPost({ image, text, userId }, onCompletePost));
    };

    return (
        <div>
            {isOwnerPost && (
                <div>
                    <Input name="icon" id="icon" onChange={(e): void => setImage(e.target.value)} value={image} />
                    <Textarea name="text" id="text" onChange={(e): void => setText(e.target.value)} value={text} />
                    <Button isDisabled={isDisabled} onClick={handleOnAddPostClick}>
                        Add Post
                    </Button>
                </div>
            )}
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
                                Like {likes.length}
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
