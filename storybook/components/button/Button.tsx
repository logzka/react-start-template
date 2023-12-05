import React from 'react';

import './button.scss';

/** Types */
import { IButtonProps } from './types';

const Button = ({
  className = '',
  type = 'primary',
  size = 'medium',
  icon = false,
  active = false,
  children,
  onClick,
}: React.PropsWithChildren<IButtonProps>) => {
  return (
    <button
      className={`button ${className} ${icon ? 'button--icon' : ''} ${
        icon && active ? 'button--icon__active' : ''
      } button--${type} button--${size}`}
      onClick={onClick}
    >
      <span className="button--inner">{children}</span>
    </button>
  );
};

export default Button;
