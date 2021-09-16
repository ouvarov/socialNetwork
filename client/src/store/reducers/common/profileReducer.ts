import { PROFILE_TYPE } from 'store/const';
import { ProfileActionTypes, ProfileTypes } from 'store/types';

const profileReducer = (profile: ProfileTypes = { data: null, isLoading: true }, action: ProfileActionTypes) => {
    switch (action.type) {
        case PROFILE_TYPE.SET_PROFILE:
            return {
                ...profile,
                data: { user: action.data?.user, posts: action.data?.posts },
                isLoading: false,
            };
        case PROFILE_TYPE.CLEAN_PROFILE:
            return { data: [], posts: [], isLoading: true };
        default:
            return profile;
    }
};

export default profileReducer;
