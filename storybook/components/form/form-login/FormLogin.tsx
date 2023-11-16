import React, { ReactNode } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { withTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';

/** Components */
import Input from '../../input/Input';

/** Styled Components */
import { FormStyled, FormItemStyled, FormErrorStyled } from '../form-styled-components';

/** Types */
import { Inputs } from './types';

yup.setLocale({
  mixed: {
    required: 'form.validation.is_required',
    default: 'form.validation.is_not_valid',
  },
  string: { email: 'form.validation.email_invalid' },
});

const schema: yup.ObjectSchema<Inputs> = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

const FormLogin = ({ t }: { t?: (v: string) => ReactNode | string }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid, isSubmitted },
    // TODO: избавиться от Partial
  } = useForm<Partial<Inputs>>({
    mode: 'onChange',
    defaultValues: { email: '', password: '' },
    resolver: yupResolver<Inputs>(schema),
  });

  const customHandleSubmit: SubmitHandler<Inputs> = (values) => {
    console.log('values: ', values);
    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(customHandleSubmit)}>
      <FormItemStyled className="form--item">
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input placeholder={t('form.email') as string} {...field} />}
        />
        {errors.email && <FormErrorStyled className="form--error">{t(errors.email?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="password"
          control={control}
          render={({ field }) => <Input placeholder={t('form.password') as string} {...field} />}
        />
        {errors.password && <FormErrorStyled className="form--error">{t(errors.password?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <input className="button button--primary button--medium" type="submit" value={t('form.login') as string} />
    </FormStyled>
  );
};

const FormLoginTranslated = withTranslation('common')(FormLogin);
export default FormLoginTranslated;
