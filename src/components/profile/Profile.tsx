import React from 'react';
import { useMutation } from '@apollo/client';

/** Components */
import FormProfile from '../form/form-profile/FormProfile';
import FormPasswordChange from '../form/form-password-change/FormPasswordChange';

/** Styled */
import { ProfileStyled } from './styled';

/** Types */
import { Inputs } from '../form/form-password-change/types';

/** GQL */
import { PASSWORD_CHANGE } from 'src/graphql/schemes/PASSWORD_CHANGE';

const Profile = () => {
  const [changePassword, { error }] = useMutation(PASSWORD_CHANGE);

  const onSubmitHandler = (values: Inputs) => {
    changePassword({
      variables: {
        input: {
          ...values,
        },
      },
    })
      .then((res) => {
        const {
          data: {
            profile: {
              password: {
                change: { success },
              },
            },
          },
        } = res;

        if (success) alert('Пароль успешно обновлен.');
      })
      .catch((err) => {
        console.error(err);
        alert(`При обновлении пароля возникла ошибка. ${error?.message}`);
      });
  };

  return (
    <ProfileStyled className="profile">
      <FormProfile />
      <FormPasswordChange onSubmitHandler={onSubmitHandler} errorMessage={error?.message} />
    </ProfileStyled>
  );
};

export default Profile;
