import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

/** Components */
import FormSignupTranslated from 'src/components/form/form-signup/FormSignup';
import { Inputs } from 'src/components/form/form-signup/types';
import { profileAdd, profileReset } from 'src/redux/profileReducer';
import { tokenThunks, tokenSelectors } from 'src/redux/tokenReducer';
import { RootState, useTypedDispatch } from 'src/store';

/** GQL */
import { REGISTER } from 'src/graphql/schemes/REGISTER';

const RegisterPage = () => {
  const dispatch = useTypedDispatch();
  const { resetTokenThunk } = tokenThunks;
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);
  const [login, { error }] = useMutation(REGISTER);

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
    login({ variables: event })
      .then((res) => {
        const {
          data: {
            profile: {
              signup: { token },
            },
          },
        } = res;

        dispatch(tokenThunks.setTokenThunk(token));

        /** Set fake user data */
        dispatch(
          profileAdd({
            firstName: 'Administrator',
            lastName: '',
            gender: 'male',
            age: 30,
            phone: event.phone,
            email: event.email,
            role: 'admin',
          })
        );
        goToHome();
      })
      .catch((err) => {
        console.log({ 'Register error': err });
      });
  }

  return <FormSignupTranslated onSubmitHandler={onSubmit} errorMessage={error ? error.message : ''} />;
};

export default RegisterPage;
