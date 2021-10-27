import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Loading } from 'common/components';
import { ProfileInfo, Post } from 'profile/commponents';

import { StateTypes } from 'store/types';
import { cleanProfile, getProfile } from 'store/actions';

import { socket } from 'api';
import { SOCKET_CONSTANTS } from 'api/constants';
import { joinProfile } from 'profile/api/sockets';

const Profile: React.FC = () => {
    const { userId } = useParams<Record<string, string>>();
    const dispatch = useDispatch();
    const isLoading = useSelector((state: StateTypes) => state.profile.isLoading);

    useEffect(() => {
        dispatch(getProfile(userId));

        return (): void => {
            dispatch(cleanProfile());
        };
    }, [userId]);

    useEffect(() => {
        const handleUpdateProfile = () => {
            dispatch(getProfile(userId));
        };

        joinProfile(userId);

        socket.on(SOCKET_CONSTANTS.UPDATE_PROFILE, handleUpdateProfile);

        return () => {
            socket.off(SOCKET_CONSTANTS.UPDATE_PROFILE, handleUpdateProfile);
        };
    }, []);

    if (isLoading) return <Loading />;

    return (
        <div>
            <ProfileInfo />
            <Post userId={userId} />
        </div>
    );
};

export default Profile;
