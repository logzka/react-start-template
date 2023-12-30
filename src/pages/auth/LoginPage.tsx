import React from 'react';

/** Components */
import FormLoginTranslated from 'src/components/form/form-login/FormLogin';
import { Inputs } from 'src/components/form/form-login/types';
import { tokenThunks } from 'src/redux/tokenReducer';
import { useTypedDispatch } from 'src/store';

const LoginPage = () => {
  const dispatch = useTypedDispatch();

  function onSubmit(event: Inputs) {
    console.log('login', event.email);
    dispatch(tokenThunks.setTokenThunk(event.email));
  }

  return <FormLoginTranslated onSubmitHandler={onSubmit} />;
};

export default LoginPage;
