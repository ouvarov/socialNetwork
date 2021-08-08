import * as React from 'react';
import classNames from 'classnames';

type ButtonOptionalPropsType = {
    className?: string;
    isDisabled?: boolean;
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FunctionComponent<ButtonOptionalPropsType> = ({
    onClick,
    className = '',
    children = null,
    isDisabled = false,
}) => (
    <button
        type="button"
        onClick={onClick}
        disabled={isDisabled}
        className={classNames(`button ${className}`, {
            'button--disabled': isDisabled,
        })}
    >
        {children}
    </button>
);

export default Button;
