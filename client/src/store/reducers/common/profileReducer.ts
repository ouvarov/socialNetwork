import { PROFILE_TYPE } from 'store/const';
import { ProfileActionTypes, ProfileTypes } from 'store/types';
import { initialProfileState } from 'store/initialStates';

const profileReducer = (profile: ProfileTypes = initialProfileState, action: ProfileActionTypes): ProfileTypes => {
    switch (action.type) {
        case PROFILE_TYPE.SET_PROFILE:
            return {
                ...profile,
                data: { user: action.data.user, posts: action.data.posts },
                isLoading: false,
            };
        case PROFILE_TYPE.CLEAN_PROFILE:
            return initialProfileState;
        default:
            return profile;
    }
};

export default profileReducer;
