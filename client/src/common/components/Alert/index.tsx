import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StateTypes } from 'store/types';
import { removeError } from 'store/actions';

const Alert: React.FC = () => {
    const error = useSelector((state: StateTypes) => state.error.errorMessages);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error.length) {
            setTimeout(() => {
                dispatch(removeError());
            }, 3000);
        }
    }, [error]);

    return (
        <div className="alert">
            {error.map(text => (
                <div className="alert-item">{text}</div>
            ))}
        </div>
    );
};

export default Alert;
