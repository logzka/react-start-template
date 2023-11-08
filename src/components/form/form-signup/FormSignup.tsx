import React, { ReactNode } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../input/Input';

type Inputs = {
  phone: string;
  email: string;
  password: string;
  password2: string;
};

const FormProfileStyled = styled.form`
  display: grid;
  gap: 2em;
`;

const FormItemStyled = styled.div`
  position: relative;
  width: 280px;
`;

const FormErrorStyled = styled.div`
  position: absolute;
  top: 44px;
  left: 12px;
  color: red;
  font-size: x-small;
`;

const phoneRegExp = /^\+?\d{10,13}$/;

const schema: yup.ObjectSchema<Inputs> = yup
  .object({
    phone: yup.string().required().matches(phoneRegExp, 'Phone number is not valid'),
    email: yup.string().required().email(),
    password: yup.string().required(),
    password2: yup
      .string()
      .required()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();

const FormSignup = ({ t }: { t?: (v: string) => ReactNode | string }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid, isSubmitted },
    // TODO: избавиться от Partial
  } = useForm<Partial<Inputs>>({
    mode: 'onChange',
    defaultValues: { phone: '', email: '', password: '', password2: '' },
    resolver: yupResolver<Inputs>(schema),
  });

  const customHandleSubmit: SubmitHandler<Inputs> = (values) => {
    console.log('values: ', values);
    reset();
  };

  return (
    <FormProfileStyled onSubmit={handleSubmit(customHandleSubmit)}>
      <FormItemStyled className="form--item">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <Input placeholder={t('form.phone') as string} required {...field} />}
        />
        {errors.phone && <FormErrorStyled className="form--error">{errors.phone?.message}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input placeholder={t('form.email') as string} required {...field} />}
        />
        {errors.email && <FormErrorStyled className="form--error">{errors.email?.message}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input placeholder={t('form.password') as string} required {...field} />}
        />
        {errors.password && <FormErrorStyled className="form--error">{errors.password?.message}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="password2"
          control={control}
          render={({ field }) => <Input placeholder={t('form.password2') as string} required {...field} />}
        />
        {errors.password2 && <FormErrorStyled className="form--error">{errors.password2?.message}</FormErrorStyled>}
      </FormItemStyled>

      <input className="button button--primary button--medium" type="submit" value={t('form.singup') as string} />
    </FormProfileStyled>
  );
};

const FormSignupTranslated = withTranslation('common')(FormSignup);
export default FormSignupTranslated;
