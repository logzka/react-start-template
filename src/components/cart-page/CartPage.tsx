import React, { FC, ReactNode } from 'react';
import { withTranslation } from 'react-i18next';
import { styled } from 'styled-components';

/** Types */
import { TCake } from '../../api/cakes';

/** Components */
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

interface tr {
  t?: (v: string, params?: any) => ReactNode | string;
  cartCakes: TCake[];
}

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  gap: 1em;
  padding: 2em 0;
`;

const ItemListWrapper = styled.div`
  width: 100%;
  justify-content: center;
  gap: 2em;
  :nth-child(n) {
    margin-bottom: 2px;
  }
`;

const CartFooter = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
  padding: 0;
  margin-top: 0;
`;

const CartText = styled.div``;

const CartPage: FC<tr> = ({ cartCakes, t }) => {
  const orderSumm = cartCakes.reduce((summ, cake) => {
    return summ + parseFloat(cake.price);
  }, 0);

  return (
    <Cart>
      <ItemListWrapper>
        {cartCakes.map(({ categoryName, name, price, priceOld, description, imageUrl, id }) => (
          <CartItem
            key={id}
            type="default"
            categoryName={categoryName}
            name={name}
            price={price}
            priceOld={priceOld}
            description={description}
            imageUrls={[imageUrl]}
          />
        ))}
      </ItemListWrapper>
      <CartFooter>
        <CartText>{t('cart.total', { summ: orderSumm })}</CartText>
        <Button>{t('cart.create_order')}</Button>
      </CartFooter>
    </Cart>
  );
};

const CartPageTranslated = withTranslation('common')(CartPage);
export default CartPageTranslated;
