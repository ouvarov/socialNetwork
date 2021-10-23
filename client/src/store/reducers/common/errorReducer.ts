import { ErrorActionTypes, ErrorTypes } from 'store/types/common/ErrorTypes';
import { ERROR_TYPES } from 'store/const';

const errorReducer = (error: ErrorTypes = { errorMessages: [] }, action: ErrorActionTypes): ErrorTypes => {
    switch (action.type) {
        case ERROR_TYPES.SET_ERROR:
            return {
                ...error,
                errorMessages: [...error.errorMessages, action.data],
            };
        case ERROR_TYPES.REMOVE_ERROR:
            return {
                ...error,
                errorMessages: error.errorMessages.slice(1),
            };
        default:
            return error;
    }
};

export default errorReducer;
