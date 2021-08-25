import { PROFILE_TYPE } from 'store/const';
import { ProfileActions, ProfileTypes } from 'store/types';

const profileReducer = (
    profile: ProfileTypes = { data: null, isLoading: true, isAuth: false },
    action: ProfileActions,
) => {
    switch (action.type) {
        case PROFILE_TYPE.SET_PROFILE:
            return {
                ...profile,
                data: { user: action.data?.user, posts: action.data?.posts },
                isLoading: false,
                isAuth: true,
            };
        case PROFILE_TYPE.CLEAN_PROFILE:
            return { data: null, isLoading: true, isAuth: false };
        default:
            return profile;
    }
};

export default profileReducer;
