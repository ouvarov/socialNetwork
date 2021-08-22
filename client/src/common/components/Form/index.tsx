/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { KEYBOARD_KEY_CODES } from '../../constans';

type FormPropsType = {
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
    autoComplete?: string;
    isDisabled?: boolean;
    className?: string;
    action?: string;
    target?: string;
    id?: string;
    style?: React.CSSProperties;
};

const Form: React.FC<FormPropsType> = ({
    onSubmit,
    children,
    isDisabled,
    autoComplete,
    className = '',
    id,
    action,
    target,
    style,
}) => {
    const handleKeyDown = (event: React.KeyboardEvent): void => {
        if (isDisabled && (event.charCode || event.keyCode) === KEYBOARD_KEY_CODES.ENTER) {
            event.preventDefault();
        }
    };

    return (
        <form
            className={className}
            onSubmit={onSubmit}
            onKeyDown={handleKeyDown}
            autoComplete={autoComplete}
            action={action}
            target={target}
            style={style}
            id={id}
        >
            {children}
        </form>
    );
};

export default Form;
