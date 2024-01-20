import React, { FC } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { withTranslation, useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

/** Styled Components */
import { FormStyled, FormItemStyled, FormErrorStyled } from '../form-styled-components';
/** Components */
import Input from '../../input/Input';

/** Types */
import { Inputs, IFormPassword } from './types';

yup.setLocale({
  mixed: {
    required: 'form.validation.is_required',
    default: 'form.validation.is_not_valid',
  },
  string: { email: 'form.validation.email_invalid' },
});

const schema: yup.ObjectSchema<Inputs> = yup
  .object({
    password: yup.string().required(),
    newPassword: yup
      .string()
      .required()
      .notOneOf([yup.ref('password'), ''], 'form.validation.password_must_not_match')
      .matches(/(?=.*[0-9])(?=.*[_!@#$%^&*])(?=.*[a-z])[0-9a-z!_@#$%^&*]{8,}/g, {
        message: 'Пароль должен быть 8 и более символов и содержать один из спецю символов _#$%ˆ&*()=+!˜',
        excludeEmptyString: true,
      }),
  })
  .required();

const FormPassword: FC<IFormPassword> = ({ onSubmitHandler, errorMessage }) => {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
    // TODO: избавиться от Partial
  } = useForm<Partial<Inputs>>({
    mode: 'onChange',
    defaultValues: { password: '', newPassword: '' },
    resolver: yupResolver<Inputs>(schema),
  });

  const customHandleSubmit: SubmitHandler<Inputs> = (values) => {
    onSubmitHandler(values);
    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(customHandleSubmit)}>
      <FormItemStyled className="form--item">
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input id="form-pswrd--old" placeholder={t('form.oldPassword') as string} {...field} />
          )}
        />
        {errors.password && <FormErrorStyled className="form--error">{t(errors.password?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="newPassword"
          control={control}
          render={({ field }) => (
            <Input id="form-pswrd--new" placeholder={t('form.newPassword') as string} {...field} />
          )}
        />
        {errors.newPassword && (
          <FormErrorStyled className="form--error">{t(errors.newPassword?.message)}</FormErrorStyled>
        )}

        {errorMessage && <FormErrorStyled className="form--error">{t(errorMessage)}</FormErrorStyled>}
      </FormItemStyled>
      <input
        className="button button--primary button--medium"
        type="submit"
        value={t('form.passwordChange') as string}
      />
    </FormStyled>
  );
};

export default withTranslation()(FormPassword);
