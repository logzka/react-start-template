import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

/** Components */
import FormLoginTranslated from 'src/components/form/form-login/FormLogin';
import { Inputs } from 'src/components/form/form-login/types';
import { profileAdd, profileReset } from 'src/redux/profileReducer';
import { tokenThunks, tokenSelectors } from 'src/redux/tokenReducer';
import { RootState, useTypedDispatch } from 'src/store';

const LoginPage = () => {
  const dispatch = useTypedDispatch();
  const { resetTokenThunk } = tokenThunks;
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);

  useEffect(() => {
    if (token) {
      dispatch(resetTokenThunk());
      /** Reset user data */
      dispatch(profileReset());
    }
  }, []);

  const navigate = useNavigate();
  const goToHome = () => navigate('/');

  function onSubmit(event: Inputs) {
    dispatch(tokenThunks.setTokenThunk(event.email));
    /** Set fake user data */
    dispatch(
      profileAdd({
        firstName: 'Administrator',
        lastName: '',
        gender: 'male',
        age: 30,
        phone: '79609999999',
        email: event.email,
        role: 'admin',
      })
    );
    goToHome();
  }

  return <FormLoginTranslated onSubmitHandler={onSubmit} />;
};

export default LoginPage;
