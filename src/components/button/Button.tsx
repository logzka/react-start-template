import React, { MouseEventHandler } from 'react';

import './button.scss';

interface IButtonProps {
    type?: TButtonType,
    size?: TButtonSize,
    icon?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
};

export type TButtonSize = 'small' | 'medium' | 'large';
export type TButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'disabled' | 'icon';

const Button = ({
    type = 'primary',
    size = 'medium',
    icon = false,
    children,
    onClick,
}: React.PropsWithChildren<IButtonProps>) => {
    return (
        <button
            className={`button ${icon ? 'button--icon' : ''} button--${type} button--${size}`}
            onClick={onClick}
        >
            <span className='button--inner'>{children}</span>
        </button>
    );
};

export default Button;
