import React from 'react';
import { useDispatch } from 'react-redux';

/** Components */
import FormLoginTranslated from 'src/components/form/form-login/FormLogin';
import { Inputs } from 'src/components/form/form-login/types';
import { tokenSet } from 'src/redux/tokenReducer';

const LoginPage = () => {
  const dispatch = useDispatch();

  function onSubmit(event: Inputs) {
    console.log('login', event.email);
    dispatch(tokenSet(event.email));
  }

  return <FormLoginTranslated onSubmitHandler={onSubmit} />;
};

export default LoginPage;
