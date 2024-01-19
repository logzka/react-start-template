import React, { ReactNode, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { withTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLazyQuery, useMutation } from '@apollo/client';

/** Types */
import { IFormValues } from './types';
import { ICardProps } from '../../card/types';

/** Components */
import Input from '../../input/Input';
import Select from '../../select/Select';

/** Styled Components */
import { FormStyled, FormItemStyled, FormErrorStyled } from '../form-styled-components';

/** GQL */
import { GET_CATEGORIES } from 'src/graphql/schemes/GET_CATEGORIES';
import { UPDATE_CAKE } from 'src/graphql/schemes/UPDATE_CAKE';
import { CREATE_CAKE } from 'src/graphql/schemes/CREATE_CAKE';

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
    oldPrice: yup.number().positive().required(),
    price: yup.number().positive().required(),
    desc: yup.string().required(),
    photo: yup.string().url().required(),
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
    setValue,
  } = useForm({
    defaultValues: {
      category: 'cake',
      name: '',
      oldPrice: 0,
      price: 0,
      desc: '',
      photo: '',
    },
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [getCategoriesLazy, { data }] = useLazyQuery(GET_CATEGORIES);
  const [updateCake] = useMutation(UPDATE_CAKE);
  const [createCake] = useMutation(CREATE_CAKE);

  const { categories } = data || {};
  const { getMany } = categories || {};
  const { data: categoriesData } = getMany || {};

  console.log(categoriesData);

  useEffect(() => {
    getCategoriesLazy();

    if (!cardData) return;

    type TKeys = 'category' | 'name' | 'oldPrice' | 'price' | 'desc' | 'photo';
    let key = 'category' as string;

    for (key in cardData) {
      const uKey = cardData[key as TKeys];
      setValue(key as TKeys, typeof uKey === 'object' ? uKey?.value : uKey);
    }
  }, []);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(cardData);

    cardData
      ? updateCake({
          variables: {
            patchId: cardData.id,
            input: {
              categoryId: data.category.id,
              name: data.name,
              desc: data.desc,
              price: data.price,
              oldPrice: data.oldPrice,
              photo: data.photo,
            },
          },
        }).then((res) => console.log(res.data))
      : createCake({
          variables: {
            input: {
              categoryId: '659e79f1f524e46e2421c9be',
              name: data.name,
              price: data.price,
              desc: data.desc,
              photo: data.photo,
            },
          },
        }).then((res) => console.log(res.data));
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormItemStyled>
        <Controller
          name="category"
          control={control}
          render={({ field: { value, ...other } }) => (
            <Select
              returnObject={false}
              items={categoriesData}
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
          name="oldPrice"
          control={control}
          render={({ field: { value, ...other } }) => (
            <Input placeholder={t('form.oldPrice') as string} required {...other} value={value || ''} />
          )}
        />
        {errors.oldPrice && <FormErrorStyled>{t(errors.oldPrice?.message)}</FormErrorStyled>}
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
          name="desc"
          control={control}
          render={({ field }) => <Input placeholder={t('form.desc') as string} required {...field} />}
        />
        {errors.desc && <FormErrorStyled>{t(errors.desc?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled>
        <Controller
          name="photo"
          control={control}
          render={({ field }) => <Input placeholder={t('form.photo') as string} required {...field} />}
        />
        {errors.photo && <FormErrorStyled>{t(errors.photo?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <input className="button button--primary button--medium" type="submit" value={t('form.save') as string} />
    </FormStyled>
  );
};

const FormEditTranslated = withTranslation('common')(FormEdit);
export default FormEditTranslated;
