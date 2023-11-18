import React from 'react';

/** Components */
import Button from '../button/Button';
/** Styles */
import './cart-button.css';
/** Types */
import { TButtonSize, TButtonType } from '../button/Button';

interface ICartButtonProps {
  type?: TButtonType;
  size?: TButtonSize;
  icon?: boolean;
  count?: number;
}

const CartButton = ({
  type = 'primary',
  size = 'medium',
  icon = false,
  count = 0,
  children = 'В корзину',
}: React.PropsWithChildren<ICartButtonProps>) => {
  return count ? (
    <div className="cart--button__counter">
      <Button icon={true}>&#60;</Button>
      <input className="cart--button__input" value={count}></input>
      <Button icon={true}>&#62;</Button>
    </div>
  ) : (
    <Button type={type} size={size} icon={icon}>
      {children}
    </Button>
  );
};

export default CartButton;
