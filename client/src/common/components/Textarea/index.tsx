import React from 'react';

type TextareaPropsType = {
    id: string;
    name: string;
    value?: string;
    placeholder?: string;
    className?: string;
    onFocus?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea: React.FC<TextareaPropsType> = ({
    id,
    name,
    value = '',
    placeholder = '',
    className = '',
    onFocus,
    onBlur,
    onChange,
}) => (
    <div className={`textarea ${className}`}>
        <textarea
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            id={id}
            name={name}
            value={value}
            placeholder={placeholder}
            className="textarea__control"
        />
    </div>
);

export default Textarea;
