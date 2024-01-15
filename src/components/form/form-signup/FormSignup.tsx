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
import { Inputs, IFormSignup } from './types';

yup.setLocale({
  mixed: {
    required: 'form.validation.is_required',
    default: 'form.validation.is_not_valid',
  },
  string: { email: 'form.validation.email_invalid' },
});

const phoneRegExp = /^\+?\d{10,13}$/;

const schema: yup.ObjectSchema<Inputs> = yup
  .object({
    phone: yup.string().required().matches(phoneRegExp, 'form.validation.phone_invalid'),
    email: yup.string().required().email(),
    password: yup.string().required(),
    password2: yup
      .string()
      .required()
      .oneOf([yup.ref('password'), null], 'form.validation.password_missmatch'),
  })
  .required();

const FormSignup: FC<IFormSignup> = ({ onSubmitHandler, errorMessage }) => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
    // TODO: избавиться от Partial
  } = useForm<Partial<Inputs>>({
    mode: 'onChange',
    defaultValues: { phone: '', email: '', password: '', password2: '' },
    resolver: yupResolver<Inputs>(schema),
  });

  const customHandleSubmit: SubmitHandler<Inputs> = (values) => {
    onSubmitHandler(values);
    console.log('values: ', values);
    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(customHandleSubmit)}>
      <FormItemStyled className="form--item">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <Input id="form-signup--phone" placeholder={t('form.phone') as string} {...field} />}
        />
        {errors.phone && <FormErrorStyled className="form--error">{t(errors.phone?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input id="form-signup--email" placeholder={t('form.email') as string} {...field} />}
        />
        {errors.email && <FormErrorStyled className="form--error">{t(errors.email?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input id="form-signup--pswr" placeholder={t('form.password') as string} {...field} />}
        />
        {errors.password && <FormErrorStyled className="form--error">{t(errors.password?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="password2"
          control={control}
          render={({ field }) => <Input id="form-signup--ps2" placeholder={t('form.password2') as string} {...field} />}
        />
        {errors.password2 && <FormErrorStyled className="form--error">{t(errors.password2?.message)}</FormErrorStyled>}

        {errorMessage && <FormErrorStyled className="form--error">{t(errorMessage)}</FormErrorStyled>}
      </FormItemStyled>

      <input className="button button--primary button--medium" type="submit" value={t('form.singup') as string} />
    </FormStyled>
  );
};

export default withTranslation()(FormSignup);
