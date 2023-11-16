import React, { ReactNode } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

/** Types */
import { IFormValues } from './types';

import Input from 'src/components/input/Input';
import Select from '../../select/Select';

const FormCakeStyled = styled.form`
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

const schema = yup
  .object()
  .shape({
    categoryName: yup.string().required('Category is required'),
    name: yup.string().required('Cake name is required'),
    priceOld: yup.number().positive('Old price must be a positive number').required('Old price is required'),
    price: yup.number().positive('New price must be a positive number').required('New price is required'),
    description: yup.string().required('Description is required'),
    imageUrl: yup.string().url('Image URL is not valid').required('Image URL is required'),
  })
  .required();

const FormCake = ({ t }: { t?: (v: string) => ReactNode | string }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      categoryName: 'Торты',
      name: '',
      priceOld: 0,
      price: 0,
      description: '',
      imageUrl: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
    reset();
  };

  const cakes = [
    { id: 'cake', name: 'Торты' },
    { id: 'pie', name: 'Пироги' },
    { id: 'dessert', name: 'Десерты' },
  ];

  return (
    <FormCakeStyled onSubmit={handleSubmit(onSubmit)}>
      <FormItemStyled>
        <Controller
          name="categoryName"
          control={control}
          render={({ field }) => (
            <Select
              returnObject={false}
              items={cakes}
              placeholder={t('cakeForm.category') as string}
              required
              {...field}
            />
          )}
        />
        {errors.categoryName && <FormErrorStyled>{errors.categoryName?.message}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input placeholder={t('cakeForm.name') as string} required {...field} />}
        />
        {errors.name && <FormErrorStyled>{errors.name?.message}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled>
        <Controller
          name="priceOld"
          control={control}
          render={({ field }) => <Input placeholder={t('cakeForm.priceOld') as string} required {...field} />}
        />
        {errors.name && <FormErrorStyled>{errors.priceOld?.message}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled>
        <Controller
          name="price"
          control={control}
          render={({ field }) => <Input placeholder={t('cakeForm.price') as string} required {...field} />}
        />
        {errors.name && <FormErrorStyled>{errors.price?.message}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled>
        <Controller
          name="description"
          control={control}
          render={({ field }) => <Input placeholder={t('cakeForm.description') as string} required {...field} />}
        />
        {errors.name && <FormErrorStyled>{errors.description?.message}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled>
        <Controller
          name="imageUrl"
          control={control}
          render={({ field }) => <Input placeholder={t('cakeForm.imageUrl') as string} required {...field} />}
        />
        {errors.name && <FormErrorStyled>{errors.imageUrl?.message}</FormErrorStyled>}
      </FormItemStyled>

      <input className="button button--primary button--medium" type="submit" />
    </FormCakeStyled>
  );
};

const FormCakeTranslated = withTranslation('common')(FormCake);
export default FormCakeTranslated;
