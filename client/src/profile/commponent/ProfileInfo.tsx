import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'store/actions';
import { StateTypes } from 'store/types';
import { Button, UserIcon } from 'common/components';

const ProfileInfo: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: StateTypes) => state.profile.data?.user);

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

export default ProfileInfo;
