import React, { memo, PropsWithChildren } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
/** Styles */
import './card.scss';
/** Components */
import CartButton from '../cart-button/CartButton';
import ModalWrapper from '../modal-wrapper/ModalWrapper';
import FormEdit from '../form/form-edit/FormEdit';
import Button from '../button/Button';
/** Icons */
import { PencilSquareIcon } from '@heroicons/react/24/solid';
/** Types */
import { ICardProps } from './types';

const Card = memo(
  ({
    type = 'default',
    category,
    name,
    price,
    priceOld,
    description,
    imageUrl,
    addToCartHandler,
    id,
  }: PropsWithChildren<ICardProps & { id?: string; addToCartHandler?: (id: string) => void }>) => {
    const { t } = useTranslation();

    const cardData = {
      category,
      name,
      price,
      priceOld,
      description,
      imageUrl,
    };

    const onClickHandle = () => {
      console.log('Add to cart', id);
      addToCartHandler(id);
    };

    const isEditable = true;

    console.log('Card render', name);
    return (
      <div className={`card card--${type}`}>
        <div className="card--inner">
          <div className="card--image__wrapper">
            <img className="card--image" src={imageUrl} alt={name} />
          </div>
          <div className="card--content">
            <span className="card--category">{category.name}</span>
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
              <div className="card--buttons">
                {isEditable && (
                  <ModalWrapper
                    actionNode={
                      <Button icon>
                        <PencilSquareIcon />
                      </Button>
                    }
                  >
                    <FormEdit cardData={cardData} />
                  </ModalWrapper>
                )}
                <CartButton onClickHandle={onClickHandle} type="success" count={0}>
                  {t('add-to-cart')}
                </CartButton>
              </div>
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
