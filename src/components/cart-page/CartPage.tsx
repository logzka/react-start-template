import React, { FC, ReactNode } from 'react';
import { withTranslation } from 'react-i18next';

interface tr {
  t?: (v: string) => ReactNode | string;
}

const CartPage: FC<tr> = ({ t }) => <p>{t('Страница корзины')}</p>;

const CartPageTranslated = withTranslation('common')(CartPage);
export default CartPageTranslated;
