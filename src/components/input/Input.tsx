import React, { ChangeEvent, FocusEventHandler, forwardRef } from 'react';

/** Types */
import { TCustomValue } from '../select/Select';

/** Styles */
import './input.scss';

// const SearchCancelBtn = css`
//     -webkit-appearance: none;
//     height: 1em;
//     width: 1em;
//     cursor: pointer;
//     background: url(/assets/icons/xmark-solid.svg) no-repeat 50% 50%;
//     background-size: contain;
//     transition: all .2s ease;
// `;

export type TInputSize = 'small' | 'medium' | 'large';

interface IInput {
  type?: string;
  className?: string;
  placeholder?: string;
  value?: TCustomValue;
  size?: TInputSize;
  disabled?: boolean;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const Input = forwardRef(
  (
    {
      type = 'search',
      className = '',
      placeholder = 'type model text',
      value = '',
      size = 'medium',
      disabled = false,
      required = false,
      onChange,
      onFocus,
      onBlur,
    }: IInput,
    ref
  ) => (
    <input
      className={`input ${className} input--${size}`}
      type={type}
      value={value}
      disabled={disabled}
      required={required}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
);

Input.displayName = 'Input';

export default Input;
