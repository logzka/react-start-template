import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { useQuery, useLazyQuery } from '@apollo/client';

/** Reducers */
import { setPagination, getCakes, loadMoreCakes } from 'src/redux/listReducer';
import { cartAddItem } from 'src/redux/cartReducer';
import { useTypedDispatch } from 'src/store';

/** Types */
import { TListProps } from './types';

/** Components */
import Card from '../card/Card';
import ModalWrapper from '../modal-wrapper/ModalWrapper';
import FormEdit from '../form/form-edit/FormEdit';
import Button from '../button/Button';

/** GQL schemes */
import { GET_CAKES } from '../../graphql/schemes/GET_CAKES';

const List = ({ t, list: { cakes, pageSize, pageNumber }, profile }: TListProps) => {
  const dispatch = useTypedDispatch();
  const { role } = profile;

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
    trackVisibility: true,
    delay: 700,
  });

  // const { loading, error, data } = useQuery(GET_CAKES, {
  //   variables: { pageSize, pageNumber },
  // });

  const [getCakesLazy, { data }] = useLazyQuery(GET_CAKES, {
    variables: { pageSize, pageNumber },
  });

  const { products } = data || {};
  const { getMany } = products || {};
  const { data: cakesData, pagination } = getMany || {};
  const { pageNumber: resPageNumber, pageSize: resPageSize } = pagination || {};

  console.log(cakesData, resPageNumber, resPageSize);

  useEffect(() => {
    dispatch(getCakes());
    getCakesLazy().then(console.log).catch(console.error);
  }, []);

  useEffect(() => {
    if (inView) {
      dispatch(loadMoreCakes());
      dispatch(
        setPagination({
          pageNumber: resPageNumber + 1,
          pageSize: resPageSize + 10,
        })
      );
      getCakesLazy().then(console.log).catch(console.error);
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
        {cakes.map(({ category, name, price, priceOld, description, imageUrl, id }) => (
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
    </div>
  );
};

const mapStateToProps = (state: TListProps) => ({
  list: state.list,
  profile: state.profile,
});

const ListTranslated = withTranslation('common')(List);
export default connect(mapStateToProps, null)(ListTranslated);
