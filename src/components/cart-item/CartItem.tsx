import React, { MouseEventHandler } from 'react';
import { withTranslation } from 'react-i18next';

/** Styles */
import './cart-item.scss';
/** Components */
import Button from '../button/Button';
/** Interfaces */
import { IPageProps } from '../page/Page';

const CartItem = ({
  type = 'default',
  category,
  name,
  price,
  priceOld,
  description,
  imageUrls,
  t,
  handleOnClick,
  id,
  count = 0,
}: React.PropsWithChildren<IPageProps & { handleOnClick?: (id: string) => void; id?: string; count?: number }>) => {
  return (
    <div className={`cart-item cart-item--${type}`}>
      <div className="cart-item--inner">
        <div className="cart-item--images">
          {imageUrls.map((url) => (
            <div key={url} className="cart-item--image" style={{ backgroundImage: 'url(' + url + ')' }}></div>
          ))}
        </div>
        <div className="cart-item--content">
          <div className="cart-item--header">
            <div>
              <span className="cart-item--category">{category.name}</span>
              <span>&#32;/&#32;</span>
              <h2 className="cart-item--name">{name}</h2>
            </div>
            <Button onClick={() => handleOnClick(id)} type="icon">
              ╳
            </Button>
          </div>
          <p className="cart-item--description">{description}</p>
          <div className="cart-item--footer">
            <div className="cart-item--price__wrapper">
              <div className="cart-item--price">
                {!count ? '' : `${count} x `}
                {price}&#32;{t('rub')}
              </div>
              <div className="cart-item--price__old">
                {priceOld}&#32;{t('rub')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartItemTranslated = withTranslation('common')(CartItem);
export default CartItemTranslated;
