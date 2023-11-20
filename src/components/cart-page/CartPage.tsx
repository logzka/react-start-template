import React, { FC, ReactNode } from 'react';
import { withTranslation } from 'react-i18next';
import { styled } from 'styled-components';
import Button from '../button/Button';

/** Components */
import CartItem from '../cart-item/CartItem';

interface tr {
  t?: (v: string) => ReactNode | string;
  cakes: [];
}

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  padding: 2em 0;
`;

const ItemWrapper = styled.div`
  width: 100%;
  /* display: grid; */
  justify-content: center;
  gap: 2em;
  /* grid-template-columns: repeat(auto-fill, minmax(320px, 320px)); */
`;

const CartPage: FC<tr> = ({ cakes, t }) => {
  return (
    <>
      <ItemList>
        <ItemWrapper>
          {cakes.map(({ categoryName, name, price, priceOld, description, imageUrl, id }) => (
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
        </ItemWrapper>
      </ItemList>
      <Button>{t('Оформить заказ')}</Button>
    </>
  );
};

const CartPageTranslated = withTranslation('common')(CartPage);
export default CartPageTranslated;
