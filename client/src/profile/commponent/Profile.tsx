import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, logoutUser } from 'store/actions';
import { StateTypes } from 'store/types';
import { Button, Loading, UserIcon } from 'common/components';

const Profile: React.FC = () => {
    const { userId } = useParams<Record<string, string>>();
    const dispatch = useDispatch();
    const user = useSelector((state: StateTypes) => state.profile.data?.user);
    const post = useSelector((state: StateTypes) => state.profile.data?.posts);
    const isLoading = useSelector((state: StateTypes) => state.profile.isLoading);

    useEffect(() => {
        dispatch(getProfile(userId));
    }, []);

    if (isLoading) return <Loading />;

    return (
        <>
            {user && (
                <div>
                    <UserIcon imageUrl={user.imageUrl} />
                    <div>{user.userName}</div>
                    <div>{user.followers.length}</div>
                    <div>{user.following.length}</div>
                </div>
            )}
            {post && (
                <div>
                    {post.map(({ image, _id, likes, text }) => (
                        <div key={_id}>
                            <figure style={{ backgroundImage: `url(${image})` }} />
                            <p>{text}</p>
                            <div>{likes.length}</div>
                        </div>
                    ))}
                </div>
            )}
            <Button
                onClick={() => {
                    dispatch(logoutUser());
                }}
            >
                Logout
            </Button>
        </>
    );
};

export default Profile;
