import { ACTIVE_TYPE } from 'store/const';
import { UsersListActions, UsersListTypes } from 'store/types';
import { InitialUserListState } from 'store/initialStates/InitialUserListState';

const usersListReducer = (usersList: UsersListTypes = InitialUserListState, action: UsersListActions) => {
    switch (action.type) {
        case ACTIVE_TYPE.ADD_USERS:
            return { ...usersList, data: action.data, isLoading: false };
        default:
            return usersList;
    }
};

export default usersListReducer;
