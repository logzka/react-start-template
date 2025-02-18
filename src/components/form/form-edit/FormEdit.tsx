import React, { ReactNode, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { withTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

/** Types */
import { IFormValues } from './types';
import { ICardProps } from '../../card/types';

/** Components */
import Input from '../../input/Input';
import Select from '../../select/Select';

/** Styled Components */
import { FormStyled, FormItemStyled, FormErrorStyled } from '../form-styled-components';

yup.setLocale({
  mixed: {
    required: 'form.validation.is_required',
    default: 'form.validation.is_not_valid',
  },
  string: {
    email: 'form.validation.email_invalid',
    url: 'form.validation.url_invalid',
  },
  number: {
    positive: 'form.validation.positive_invalid',
  },
});

const schema = yup
  .object()
  .shape({
    category: yup.string().required(),
    name: yup.string().required(),
    priceOld: yup.number().positive().required(),
    price: yup.number().positive().required(),
    description: yup.string().required(),
    imageUrl: yup.string().url().required(),
  })
  .required();

interface IFormEdit {
  t: (v: string) => ReactNode | string;
  cardData?: ICardProps;
}

const FormEdit = ({ t, cardData }: IFormEdit) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      category: 'cake',
      name: '',
      priceOld: 0,
      price: 0,
      description: '',
      imageUrl: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!cardData) return;

    type TKeys = 'category' | 'name' | 'priceOld' | 'price' | 'description' | 'imageUrl';
    let key = 'category' as string;

    for (key in cardData) {
      const uKey = cardData[key as TKeys];
      setValue(key as TKeys, typeof uKey === 'object' ? uKey?.value : uKey);
    }
  }, [cardData]);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
    reset();
  };

  const categories = [
    { value: 'cake', name: 'Торты' },
    { value: 'pie', name: 'Пироги' },
    { value: 'dessert', name: 'Десерты' },
  ];

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormItemStyled>
        <Controller
          name="category"
          control={control}
          render={({ field: { value, ...other } }) => (
            <Select
              returnObject={false}
              items={categories}
              placeholder={t('form.category') as string}
              required
              value={value}
              {...other}
            />
          )}
        />
        {errors.category && <FormErrorStyled>{t(errors.category?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input placeholder={t('form.name') as string} required {...field} />}
        />
        {errors.name && <FormErrorStyled>{t(errors.name?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled>
        <Controller
          name="priceOld"
          control={control}
          render={({ field: { value, ...other } }) => (
            <Input placeholder={t('form.priceOld') as string} required {...other} value={value || ''} />
          )}
        />
        {errors.priceOld && <FormErrorStyled>{t(errors.priceOld?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled>
        <Controller
          name="price"
          control={control}
          render={({ field: { value, ...other } }) => (
            <Input placeholder={t('form.price') as string} required {...other} value={value || ''} />
          )}
        />
        {errors.price && <FormErrorStyled>{t(errors.price?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled>
        <Controller
          name="description"
          control={control}
          render={({ field }) => <Input placeholder={t('form.description') as string} required {...field} />}
        />
        {errors.description && <FormErrorStyled>{t(errors.description?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled>
        <Controller
          name="imageUrl"
          control={control}
          render={({ field }) => <Input placeholder={t('form.imageUrl') as string} required {...field} />}
        />
        {errors.imageUrl && <FormErrorStyled>{t(errors.imageUrl?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <input className="button button--primary button--medium" type="submit" value={t('form.save') as string} />
    </FormStyled>
  );
};

const FormEditTranslated = withTranslation('common')(FormEdit);
export default FormEditTranslated;
