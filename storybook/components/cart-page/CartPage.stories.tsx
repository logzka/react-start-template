import CartPageTranslated from './CartPage';
import { cakes as cakesData } from '../../api/cakes';

export default {
  title: 'Pages/CartPage',
  component: CartPageTranslated,
};

export const DefaultCartPage = {
  args: {
    cartCakes: cakesData,
  },
};
