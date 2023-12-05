import React from 'react';

import { cakes as cakesData } from '../../api/cakes';

/** Components */
import CartPageTranslated from '../../components/cart-page/CartPage';

const CartPage = () => <CartPageTranslated cartCakes={cakesData} />;

export default CartPage;
