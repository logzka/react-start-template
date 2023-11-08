import React, { ReactNode } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import styled from 'styled-components';
import { withTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../../input/Input';

type Inputs = {
  email: string;
  password: string;
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

const schema: yup.ObjectSchema<Inputs> = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

const FormLogin = ({ t }: { t?: (v: string) => ReactNode | string }) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid, isSubmitted },
  } = useForm<Partial<Inputs>>({
    // TODO: избавиться от Partial
    mode: 'onSubmit',
    defaultValues: { email: '', password: '' },
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

      <input className="button button--primary button--medium" type="submit" value={t('form.login') as string} />
    </FormProfileStyled>
  );
};

const FormLoginTranslated = withTranslation('common')(FormLogin);
export default FormLoginTranslated;
