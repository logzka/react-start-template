import React, { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

/** Reducers */
import { getCakes, loadMoreCakes } from 'src/redux/listReducer';
import { cartAddItem } from 'src/redux/cartReducer';
import { useTypedDispatch } from 'src/store';

/** Types */
import { TCake } from 'src/api/cakes';
import { IProfile } from './form/form-profile/types';

/** Components */
import Card from './card/Card';
import ModalWrapper from './modal-wrapper/ModalWrapper';
import FormEdit from './form/form-edit/FormEdit';
import Button from './button/Button';

const List = ({ t, list, profile }: { t: (v: string) => ReactNode | string; list: TCake[]; profile: IProfile }) => {
  const dispatch = useTypedDispatch();
  const { role } = profile;

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    trackVisibility: true,
    delay: 700,
  });

  useEffect(() => {
    dispatch(getCakes());
  }, []);

  useEffect(() => {
    if (inView) loadMoreCakesHandle();
  }, [inView]);

  const addToCartHandler = (id: string, count: number) => {
    dispatch(cartAddItem({ ...list.find((cake) => cake.id === id), count: count }));
  };

  const loadMoreCakesHandle = () => {
    dispatch(loadMoreCakes());
  };

  return (
    <div className="list">
      {role === 'admin' && (
        <ModalWrapper actionNode={<Button>{t('add-cake-modal')}</Button>}>
          <FormEdit />
        </ModalWrapper>
      )}
      <div className="list--wrapper">
        {list.map(({ category, name, price, priceOld, description, imageUrl, id }) => (
          <Card
            key={id}
            id={id}
            type="default"
            category={category}
            name={name}
            price={+price}
            priceOld={+priceOld}
            description={description}
            imageUrl={imageUrl}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>

      <span ref={ref} className="list--load-more__spin">
        &#8635;
      </span>
      {/* <Button className='list--load-more' onClick={setCakesHandle}>Загрузить еще</Button> */}
    </div>
  );
};

const mapStateToProps = (state: { list: [], profile: IProfile }) => ({
  list: state.list,
  profile: state.profile,
});

const ListTranslated = withTranslation('common')(List);
export default connect(mapStateToProps, null)(ListTranslated);
