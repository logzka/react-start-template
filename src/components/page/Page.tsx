import React, { ReactNode } from 'react';
import { withTranslation } from 'react-i18next';
/** Styles */
import './page.scss';
/** Components */
import CartButton from '../cart-button/CartButton';
/** Types */
import { TCardType, TCategory } from '../card/types';

export interface IPageProps {
  type?: TCardType;
  category: TCategory;
  name: string;
  price: string;
  oldPrice: string;
  desc: string;
  photos: string[];
  t?: (v: string) => ReactNode | string;
}

const Page = ({
  type = 'default',
  category,
  name,
  price,
  oldPrice,
  desc,
  photos,
  t,
}: React.PropsWithChildren<IPageProps>) => {
  return (
    <div className={`page page--${type}`}>
      <div className="page--inner">
        <div className="page--images">
          {photos.map((url) => (
            <div key={url} className="page--image" style={{ backgroundImage: 'url(' + url + ')' }}></div>
          ))}
        </div>
        <div className="page--content">
          <span className="page--category">{category.name}</span>
          <div>
            <h2 className="page--name">{name}</h2>
            <p className="page--description">{desc}</p>
          </div>
          <div className="page--footer">
            <div className="page--price__wrapper">
              <div className="page--price">
                {price}&#32;{t('rub')}
              </div>
              <div className="page--price__old">
                {oldPrice}&#32;{t('rub')}
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
};

const PageTranslated = withTranslation('common')(Page);
export default PageTranslated;
