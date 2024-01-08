import React, { useInsertionEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializedActions } from './initializeReducer';

export const Initializer = () => {
  const dispatch = useDispatch();

  useInsertionEffect(() => {
    dispatch(initializedActions.init());
  }, [dispatch]);

  return <></>;
};
