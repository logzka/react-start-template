import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowRightStartOnRectangleIcon, ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid';
import Button from '../button/Button';
import { tokenThunks, tokenSelectors } from 'src/redux/tokenReducer';
import { RootState, useTypedDispatch } from 'src/store';

export const Login: FC = () => {
  const dispatch = useTypedDispatch();
  const { resetTokenThunk } = tokenThunks;
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);

  const onClickHandler = () => {
    console.log('logout');
    dispatch(resetTokenThunk());
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
