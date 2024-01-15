import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

/** Components */
import FormLoginTranslated from 'src/components/form/form-login/FormLogin';
import FormSignupTranslated from 'src/components/form/form-signup/FormSignup';

/** Types */
import { Inputs } from 'src/components/form/form-login/types';
import { TLogin } from './types';

/** Redux */
import { profileAdd, profileReset } from 'src/redux/profileReducer';
import { tokenThunks, tokenSelectors } from 'src/redux/tokenReducer';
import { RootState, useTypedDispatch } from 'src/store';

/** Styled */
import { LoginPageStyled } from './styled';

/** GQL */
import { SIGN_IN } from 'src/graphql/schemes/SIGN_IN';
import { SIGN_UP } from 'src/graphql/schemes/SIGN_UP';

const LoginPage = () => {
  const dispatch = useTypedDispatch();
  const { resetTokenThunk } = tokenThunks;
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);
  const [signIn, { error: signInError }] = useMutation(SIGN_IN);
  const [signUp, { error: signUpError }] = useMutation(SIGN_UP);

  useEffect(() => {
    if (token) {
      dispatch(resetTokenThunk());
      /** Reset user data */
      dispatch(profileReset());
    }
  }, []);

  const navigate = useNavigate();
  const goToHome = () => navigate('/');

  const loginHandlerClb = (
    event: { email?: string; password?: string; phone?: string },
    res: {
      data?: {
        profile: {
          [K in TLogin]: { token: string };
        };
      };
    },
    submitType: TLogin
  ): void => {
    const {
      data: {
        profile: {
          [submitType]: { token },
        },
      },
    } = res;

    dispatch(tokenThunks.setTokenThunk(token));

    /** Set fake user data */
    dispatch(
      profileAdd({
        firstName: 'Administrator',
        lastName: 'Administrator',
        gender: 'male',
        age: 30,
        phone: '79609999999',
        email: event.email,
        role: 'admin',
      })
    );
    goToHome();
  };

  function signInHandler(event: Inputs) {
    signIn({ variables: event })
      .then((res) => {
        loginHandlerClb(event, res, 'signin');
      })
      .catch((err) => {
        console.log({ 'Sign in error': err });
      });
  }

  function signUpHandler(event: Inputs) {
    signUp({ variables: event })
      .then((res) => {
        loginHandlerClb(event, res, 'signup');
      })
      .catch((err) => {
        console.log({ 'Sign up error': err });
      });
  }

  return (
    <LoginPageStyled className="login-page">
      <FormLoginTranslated onSubmitHandler={signInHandler} errorMessage={signInError ? signInError.message : ''} />
      <FormSignupTranslated onSubmitHandler={signUpHandler} errorMessage={signUpError ? signUpError.message : ''} />
    </LoginPageStyled>
  );
};

export default LoginPage;
