import React from 'react';

/** Components */
import Button from '../button/Button';
/** Styles */
import './cart-button.css';
/** Types */
import { TButtonSize, TButtonType } from '../button/types';

interface ICartButtonProps {
  type?: TButtonType;
  size?: TButtonSize;
  icon?: boolean;
  count?: number;
  setNewCount?: (count: number) => void;
}

type TAction = 'increase' | 'decrease';

const CartButton = ({
  type = 'primary',
  size = 'medium',
  icon = false,
  count = 0,
  children = 'В корзину',
  setNewCount,
}: React.PropsWithChildren<ICartButtonProps>) => {
  const [value, setValue] = React.useState(count);

  const setNewValue = (newVal: number) => {
    setValue(newVal);
    if (typeof setNewCount === 'function') setNewCount(newVal);
  };

  const handleInputChange = (event: any) => {
    const val = Number(event.target.value);
    setNewValue(val ? val : 0);
  };

  const handleOnClick = (type: TAction) => {
    let newVal = value;
    switch (type) {
      case 'increase':
        newVal = value + 1;
        break;
      case 'decrease':
        newVal = value - 1;
        break;
      default:
        break;
    }

    setNewValue(newVal);
  };

  return value ? (
    <div className="cart--button__counter">
      <Button icon={true} onClick={() => handleOnClick('decrease')}>
        &#60;
      </Button>
      <input onChange={handleInputChange} className="cart--button__input" value={value} min={0} max={10}></input>
      <Button icon={true} onClick={() => handleOnClick('increase')}>
        &#62;
      </Button>
    </div>
  ) : (
    <Button onClick={() => handleOnClick('increase')} type={type} size={size} icon={icon}>
      {children}
    </Button>
  );
};

export default CartButton;
