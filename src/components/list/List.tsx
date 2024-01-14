import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useLazyQuery } from '@apollo/client';

/** Reducers */
// import { setPagination, setCakes } from 'src/redux/listReducer';
import { cartAddItem } from 'src/redux/cartReducer';
import { useTypedDispatch } from 'src/store';

/** Types */
import { TListProps, TPagination } from './types';
import { TCake } from 'src/api/cakes';

/** Components */
import Card from '../card/Card';
import ModalWrapper from '../modal-wrapper/ModalWrapper';
import FormEdit from '../form/form-edit/FormEdit';
import Button from '../button/Button';

/** GQL schemes */
import { GET_CAKES } from '../../graphql/schemes/GET_CAKES';

const List = ({ t, profile }: TListProps) => {
  const dispatch = useTypedDispatch();
  const { role } = profile;

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    trackVisibility: true,
    delay: 700,
  });

  const [getCakesLazy, { data, fetchMore }] = useLazyQuery(GET_CAKES, {
    variables: { pageSize: 3, pageNumber: 1 },
  });

  const { products } = data || {};
  const { getMany } = products || {};
  const { data: cakes, pagination }: { data: TCake[]; pagination: TPagination } = getMany || {};
  const { pageNumber, total } = pagination || {};

  useEffect(() => {
    getCakesLazy();
  }, []);

  useEffect(() => {
    if (inView && total > cakes.length) {
      fetchMore({ variables: { pageNumber: pageNumber + 1 } });
    }
  }, [inView]);

  const addToCartHandler = (id: string, count: number) => {
    dispatch(cartAddItem({ ...cakes.find((cake) => cake.id === id), count: count }));
  };

  return (
    <div className="list">
      {role === 'admin' && (
        <ModalWrapper actionNode={<Button>{t('add-cake-modal')}</Button>}>
          <FormEdit />
        </ModalWrapper>
      )}
      <div className="list--wrapper">
        {(cakes || []).map(({ category, name, price, oldPrice, desc, photo, id }) => (
          <Card
            key={id}
            id={id}
            type="default"
            category={category}
            name={name}
            price={+price}
            oldPrice={+oldPrice}
            desc={desc}
            photo={photo}
            addToCartHandler={addToCartHandler}
          />
        ))}
      </div>

      {cakes &&
        (total > cakes.length ? (
          <span ref={ref} className="list--load-more__spin">
            &#8635;
          </span>
        ) : (
          <span>Это все наши тортики :)</span>
        ))}
    </div>
  );
};

const mapStateToProps = (state: TListProps) => ({
  profile: state.profile,
});

const ListTranslated = withTranslation('common')(List);
export default connect(mapStateToProps, null)(ListTranslated);
