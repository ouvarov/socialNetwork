import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StateTypes } from 'store/types';

import { Loading } from 'common/components';
import { cleanProfile, getProfile } from 'store/actions';
import { ProfileInfo, Post } from 'profile/commponent';

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

    if (isLoading) return <Loading />;

    return (
        <div>
            <ProfileInfo />
            <Post userId={userId} />
        </div>
    );
};

export default Profile;