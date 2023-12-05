import { MouseEventHandler } from 'react';

export interface IButtonProps {
  className?: string;
  type?: TButtonType;
  size?: TButtonSize;
  icon?: boolean;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type TButtonSize = 'small' | 'medium' | 'large';
export type TButtonType = 'primary' | 'secondary' | 'danger' | 'success' | 'disabled' | 'icon';
