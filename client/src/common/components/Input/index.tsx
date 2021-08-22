import React from 'react';

type InputPropsType = {
    id: string;
    name: string;
    value?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password';
    className?: string;
    onFocus?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputPropsType> = ({
    type = 'text',
    id,
    name,
    value = '',
    placeholder = '',
    className = '',
    onFocus,
    onBlur,
    onChange,
}) => (
    <div className={`input ${className}`}>
        <input
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            type={type}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            className="input__control"
        />
    </div>
);

export default Input;
