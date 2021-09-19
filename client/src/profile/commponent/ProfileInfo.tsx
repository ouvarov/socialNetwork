import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, UserIcon } from 'common/components';

import { follow, logoutUser } from 'store/actions';
import { StateTypes } from 'store/types';

const ProfileInfo: React.FC = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state: StateTypes) => state.profile.data?.user);
    const userId = useSelector((state: StateTypes) => state.user.data.id);

    const isOwnerProfile = profile?.id === userId;

    const onFollowClick = (userId: string): void => {
        dispatch(follow(userId));
    };

    return (
        <div>
            {profile && (
                <div>
                    <UserIcon imageUrl={profile.imageUrl} />
                    <div>{profile.userName}</div>
                    {!isOwnerProfile && (
                        <Button
                            onClick={() => {
                                onFollowClick(profile.id);
                            }}
                        >
                            {profile.followers.length}
                        </Button>
                    )}
                    <div>{profile.following.length}</div>
                </div>
            )}
            <Button
                onClick={(): void => {
                    dispatch(logoutUser());
                }}
            >
                Logout
            </Button>
        </div>
    );
};

export default ProfileInfo;
