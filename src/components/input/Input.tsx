import React, { ChangeEvent } from "react";

/** Styles */
import './input.scss';

type TInputSize = 'small' | 'medium' | 'large';

interface IInput {
    type?: string,
    placeholder?: string,
    size?: TInputSize,
    disabled?: boolean,
    required?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
};

const Input = ({
    type = 'text',
    placeholder = 'type model text',
    size = 'medium',
    disabled = false,
    required = false,
    onChange,
}: IInput) => {
    return (
        <input
            className={`input input--${size}`}
            type={type}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
        />
    );
};

export default Input;
