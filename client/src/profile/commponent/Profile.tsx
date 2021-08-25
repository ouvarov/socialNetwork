import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from 'profile/api/services/ProfileServices';
import { setProfile } from 'store/actions';
import { StateTypes } from 'store/types';

const Profile: React.FC = () => {
    const { userId } = useParams<Record<string, string>>();
    const dispatch = useDispatch();
    const user = useSelector((state: StateTypes) => state.profile.data?.user);
    const posts = useSelector((state: StateTypes) => state.profile.data?.posts);

    useEffect(() => {
        getProfile(userId).then(response => dispatch(setProfile(response.data)));
    }, []);

    return <>{user && <div>{user.userName}</div>}</>;
};

export default Profile;
