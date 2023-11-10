import React, { memo, PropsWithChildren, ReactNode } from 'react';
import { withTranslation } from 'react-i18next';
/** Styles */
import './card.scss';
/** Components */
import CartButton from '../cart-button/CartButton';

interface ICardProps {
  type?: TCardType;
  categoryName: string;
  name: string;
  price: string;
  priceOld: string;
  description: string;
  imageUrl: string;
  // t?: (v: string) => ReactNode | string,
}

export type TCardType = 'default' | 'disabled';

const Card = memo(
  ({
    type = 'default',
    categoryName,
    name,
    price,
    priceOld,
    description,
    imageUrl,
    t,
  }: PropsWithChildren<ICardProps & { t?: (v: string) => ReactNode | string }>) => {
    console.log('Card render', name);
    return (
      <div className={`card card--${type}`}>
        <div className="card--inner">
          <div className="card--image__wrapper">
            <img className="card--image" src={imageUrl} alt={name} />
          </div>
          <div className="card--content">
            <span className="card--category">{categoryName}</span>
            <h2 className="card--name">{name}</h2>
            <p className="card--description">{description}</p>
            <div className="card--footer">
              <div className="card--price__wrapper">
                <div className="card--price">
                  {price}&#32;{t('rub')}
                </div>
                <div className="card--price__old">
                  {priceOld}&#32;{t('rub')}
                </div>
              </div>
              <CartButton type="disabled" count={0}>
                {t('add-to-cart')}
              </CartButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

const CardTranslated = withTranslation('common')(Card);
export default CardTranslated;
