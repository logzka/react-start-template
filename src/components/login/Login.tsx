import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightStartOnRectangleIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid';
import Button from '../button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { tokenReset, tokenSelectors } from 'src/redux/tokenReducer';
import { RootState } from 'src/store';

export const Login: FC = () => {
  const dispatch = useDispatch();
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);

  const onClickHandler = () => {
    console.log('logout');
    dispatch(tokenReset());
  };

  return (
    <>
      {!token ? (
        <Link to={'/login'}>
          <ArrowRightEndOnRectangleIcon className="app--header__actions-icon" />
        </Link>
      ) : (
        <Button icon onClick={onClickHandler}>
          <ArrowRightStartOnRectangleIcon />
        </Button>
      )}
    </>
  );
};
