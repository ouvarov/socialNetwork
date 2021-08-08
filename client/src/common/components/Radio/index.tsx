import React from 'react';
import classNames from 'classnames';

type RadioPropsType = {
    id?: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Radio: React.FC<RadioPropsType> = ({ id = '', checked = false, onChange }) => (
    <div className={classNames('radio', { 'radio--active': checked })}>
        <input className="radio__control" type="radio" id={id} checked={checked} onChange={onChange} />
        <span className="radio__background" />
    </div>
);

export default Radio;
