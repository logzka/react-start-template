import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useMutation, useLazyQuery } from '@apollo/client';

/** Components */
import FormLoginTranslated from 'src/components/form/form-login/FormLogin';
import { Inputs } from 'src/components/form/form-login/types';
import { profileAdd, profileReset } from 'src/redux/profileReducer';
import { tokenThunks, tokenSelectors } from 'src/redux/tokenReducer';
import { RootState, useTypedDispatch } from 'src/store';

/** GQL */
import { LOGIN } from 'src/graphql/schemes/LOGIN';

const LoginPage = () => {
  const dispatch = useTypedDispatch();
  const { resetTokenThunk } = tokenThunks;
  const token = useSelector<RootState, RootState['token']>(tokenSelectors.get);
  const [login, { error }] = useMutation(LOGIN);

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
    login({ variables: event, errorPolicy: 'none' })
      .then((res) => {
        const {
          data: {
            profile: {
              signin: { token },
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
            phone: '79609999999',
            email: event.email,
            role: 'admin',
          })
        );
        goToHome();
      })
      .catch((err) => {
        // TODO: показывать уведомление, например, или вкорачить в ошибки формы
        console.log(err);
      });
  }

  // if (loading) return 'Submitting...';
  // if (error) console.log(error);
  // if (error) return `Submission error! ${error.message}`;

  return <FormLoginTranslated onSubmitHandler={onSubmit} />;
};

export default LoginPage;
