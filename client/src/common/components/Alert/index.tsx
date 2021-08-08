import React from 'react';
import { useSelector } from 'react-redux';

import { StateTypes } from '../../../types';

const Alert: React.FC = () => {
    const alertText = useSelector((state: StateTypes) => state.jokes.alertText);

    return (
        <>
            {alertText?.length && (
                <div className="alert">
                    <div className="alert__grid">
                        <p className="alert__text">{alertText}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Alert;
