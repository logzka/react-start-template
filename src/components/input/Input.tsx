import React, { ChangeEvent, FocusEventHandler, forwardRef } from 'react';
import styled from 'styled-components';

/** Types */
import { TCustomValue } from '../select/Select';

/** Styled components */
const InputStyled = styled.input<{ $type: string; $size: string }>`
  width: ${({ $type }) => {
    if ($type === 'radio') return 'auto';
    return '100%';
  }};
  padding: ${({ $size }) => {
    if ($size === 'small') return '10px 16px';
    if ($size === 'large') return '12px 24px';
    return '11px 20px';
  }};
  outline: none;
  background: transparent;
  border: 1px solid var(--active-color);
  border-radius: 2px;
  color: grey;
  max-width: 280px;
  font-size: ${({ $size }) => {
    if ($size === 'small') return '12px';
    if ($size === 'large') return '16px';
    return '14px';
  }};
`;

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
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  value?: TCustomValue;
  size?: TInputSize;
  disabled?: boolean;
  required?: boolean;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

const Input = forwardRef(
  (
    {
      type = 'search',
      id = '',
      name = '',
      className = '',
      placeholder = 'type model text',
      value = '',
      size = 'medium',
      disabled = false,
      required = false,
      checked = false,
      onChange,
      onFocus,
      onBlur,
    }: IInput,
    ref
  ) => (
    <InputStyled
      $type={type}
      $size={size}
      id={id}
      className={`input ${className} input--${size}`}
      name={name}
      type={type}
      value={value}
      disabled={disabled}
      required={required}
      checked={checked}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
);

Input.displayName = 'Input';

export default Input;
