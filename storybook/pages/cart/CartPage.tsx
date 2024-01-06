import React from 'react';

/** Components */
import CartPageTranslated from '../../components/cart-page/CartPage';
import { useTypedDispatch } from 'src/store';
import { cartDeleteItem, cartSelectors } from 'src/redux/cartReducer';
import { useSelector } from 'react-redux';

const CartPage = () => {
  const dispatch = useTypedDispatch();
  const cakesData = useSelector(cartSelectors.get);

  const removeItem = (id: string) => {
    dispatch(cartDeleteItem(id));
  };

  return <CartPageTranslated cartCakes={cakesData} removeItemHandler={removeItem} />;
};

export default CartPage;
