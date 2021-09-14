import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Textarea, Input, Button } from 'common/components';
import { StateTypes } from 'store/types';
import { addPost, deletePost } from 'store/actions';

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

    const handleOnClickAddPost = () => {
        dispatch(addPost({ image, text, userId }));
        setImage('');
        setText('');
    };

    return (
        <div>
            {isOwnerPost && (
                <div>
                    <Input name="icon" id="icon" onChange={e => setImage(e.target.value)} value={image} />
                    <Textarea name="text" id="text" onChange={e => setText(e.target.value)} value={text} />
                    <Button onClick={handleOnClickAddPost}>Add Post</Button>
                </div>
            )}
            {!!posts?.length && (
                <div>
                    {posts.map(({ image, _id, likes, text, ownerId }) => (
                        <div key={_id}>
                            <figure>
                                <img src={image} alt="post icon" />
                            </figure>
                            <p>{text}</p>
                            <div>{likes.length}</div>
                            {isOwnerPost && (
                                <Button
                                    onClick={() => {
                                        dispatch(deletePost({ postId: _id, userId: ownerId }));
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
