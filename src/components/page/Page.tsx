import React, { ReactNode } from 'react';
import { withTranslation } from 'react-i18next';
/** Styles */
import './page.scss';
/** Components */
import CartButton from '../cart-button/CartButton';
/** Types */
import { TCardType } from '../card/Card';

export interface IPageProps {
    type?: TCardType,
    categoryName: string,
    name: string,
    price: string,
    priceOld: string,
    description: string,
    imageUrls: string[],
    t?: (v: string) => ReactNode | string,
};

const Page = ({
    type = 'default',
    categoryName,
    name,
    price,
    priceOld,
    description,
    imageUrls,
    t,
}: React.PropsWithChildren<IPageProps>) => {
    return (
        <div className={`page page--${type}`}>
            <div className="page--inner">
                <div className='page--images'>
                    {
                        imageUrls.map((url) => <div
                            key={url}
                            className='page--image'
                            style={{backgroundImage: 'url('+ url + ')'}}
                        ></div>)
                    }
                </div>
                <div className='page--content'>
                    <span className='page--category'>{categoryName}</span>
                    <div>
                        <h2 className='page--name'>{name}</h2>
                        <p className='page--description'>{description}</p>
                    </div>
                    <div className='page--footer'>
                        <div className='page--price__wrapper'>
                            <div className='page--price'>{price}&#32;{t('rub')}</div>
                            <div className='page--price__old'>{priceOld}&#32;{t('rub')}</div>
                        </div>
                        <CartButton type='disabled' count={0}>{t('add-to-cart')}</CartButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PageTranslated = withTranslation('common')(Page)
export default PageTranslated;
