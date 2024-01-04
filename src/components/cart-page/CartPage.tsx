import React, { FC } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { styled } from 'styled-components';

/** Types */
import { ICartPageProps } from './types';

/** Components */
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';

const ItemListWrapperStyled = styled.div`
  display: grid;
  width: 100%;
  gap: 1em;
  margin-bottom: 2em;
`;

const CartFooterStyled = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2em;
  padding: 0;
  margin-top: 0;
`;

const CartTextStyled = styled.div``;

const CartPage: FC<ICartPageProps> = ({ cartCakes, removeItemHandler }) => {
  const { t } = useTranslation();

  const orderSumm = cartCakes.reduce((summ, cake) => {
    return summ + parseFloat(cake.price) * cake.count;
  }, 0);

  const itemOnClickHandler = (id: string) => {
    console.log('close clicked', id);
    removeItemHandler(id);
  };

  return (
    <>
      <ItemListWrapperStyled>
        {cartCakes.map(
          ({ category, name, price, priceOld, description, imageUrl, id, count }) =>
            count > 0 && (
              <CartItem
                key={id}
                id={id}
                type="default"
                category={category}
                name={name}
                price={price}
                priceOld={priceOld}
                description={description}
                imageUrls={[imageUrl]}
                count={count}
                handleOnClick={itemOnClickHandler}
              />
            )
        )}
      </ItemListWrapperStyled>
      <CartFooterStyled>
        <CartTextStyled>{t('cart.total', { summ: orderSumm })}</CartTextStyled>
        <Button>{t('cart.create_order')}</Button>
      </CartFooterStyled>
    </>
  );
};

export default withTranslation()(CartPage);
