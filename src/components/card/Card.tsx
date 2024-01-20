import React, { memo, PropsWithChildren } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useMutation } from '@apollo/client';
/** Styles */
import './card.scss';
/** Components */
import CartButton from '../cart-button/CartButton';
import ModalWrapper from '../modal-wrapper/ModalWrapper';
import FormEdit from '../form/form-edit/FormEdit';
import Button from '../button/Button';
/** Icons */
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';
/** Types */
import { ICardProps } from './types';
import { profileSelectors } from '../../redux/profileReducer';
/** GQL */
import { REMOVE_CAKE } from '../../graphql/schemes/REMOVE_CAKE';

const Card = memo(
  ({
    type = 'default',
    category,
    name,
    price,
    oldPrice,
    desc,
    photo,
    id,
    count = 0,
    addToCartHandler,
    updateList,
  }: PropsWithChildren<ICardProps>) => {
    const { t } = useTranslation();

    const { role } = useSelector(profileSelectors.get);

    const cardData = {
      id,
      category,
      name,
      price,
      oldPrice,
      desc,
      photo,
    };

    const handleSetNewCount = (newVal: number) => {
      console.log('Add to cart', id, newVal);
      addToCartHandler(id, newVal);
    };

    const [removeCake] = useMutation(REMOVE_CAKE);
    const removeCakeHandler = () => {
      removeCake({
        variables: { removeId: id },
      }).then(() => updateList());
    };

    return (
      <div className={`card card--${type}`}>
        <div className="card--inner">
          <div className="card--image__wrapper">
            <img className="card--image" src={photo} alt={name} />
          </div>
          <div className="card--content">
            <span className="card--category">{category.name}</span>
            <h2 className="card--name">{name}</h2>
            <p className="card--description">{desc}</p>
            <div className="card--footer">
              <div className="card--price__wrapper">
                <div className="card--price">
                  {price}&#32;{t('rub')}
                </div>
                <div className="card--price__old">
                  {oldPrice}&#32;{t('rub')}
                </div>
              </div>
              <div className="card--buttons">
                {role === 'admin' && (
                  <div style={{ display: 'flex' }}>
                    <ModalWrapper
                      actionNode={
                        <Button icon>
                          <PencilSquareIcon />
                        </Button>
                      }
                    >
                      {({ hide }) => <FormEdit cardData={cardData} onSuccessSubmit={hide} />}
                    </ModalWrapper>
                    <Button icon onClick={removeCakeHandler}>
                      <TrashIcon />
                    </Button>
                  </div>
                )}
                <CartButton setNewCount={handleSetNewCount} type="success" count={count}>
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
