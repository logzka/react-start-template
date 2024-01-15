import React, { useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { withTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { useMutation } from '@apollo/client';

/** Api */
import { genders } from '../../../api/genders';

/** Types */
import { IProfile, IFormProfileProps, TProfileFormKeys } from './types';

/** Styled Components */
import { FormStyled, FormItemStyled, FormErrorStyled } from '../form-styled-components';

/** Components */
import Input from '../../input/Input';

/** GQL */
import { UPDATE_PROFILE } from '../../../graphql/schemes/UPDATE_PROFILE';

yup.setLocale({
  mixed: {
    required: 'form.validation.is_required',
    default: 'form.validation.is_not_valid',
  },
  string: {
    email: 'form.validation.email_invalid',
    matches: 'form.validation.phone_invalid',
  },
  number: {
    positive: 'form.validation.positive_invalid',
    integer: 'form.validation.integer_invalid',
    min: 'form.validation.min_age_invalid',
  },
});

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    gender: yup.string().required(),
    age: yup.number().required().positive().integer().min(18),
    phone: yup
      .string()
      .required()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
      ),
    email: yup.string().required().email(),
  })
  .required();

const FormProfile = ({ t, profile }: IFormProfileProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IProfile>({
    defaultValues: profile,
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [updateProfile] = useMutation(UPDATE_PROFILE);

  const onSubmit: SubmitHandler<IProfile> = (data) => {
    updateProfile({
      variables: {
        input: {
          firstName: data.firstName,
          lastName: data.lastName,
          gender: data.gender,
          age: data.age,
        },
      },
    })
      .then((res) => {
        console.log(res?.data);
        alert('Данные пользователя успешно обновлены.');
      })
      .catch((err) => {
        console.error(err);
        alert('При обновлении пользователя возникла ошибка.');
      });
  };

  useEffect(() => {
    let key = 'firstName';
    for (key in profile) {
      const uKey = profile[key as TProfileFormKeys];
      setValue(key as TProfileFormKeys, uKey || '');
    }
  }, [profile]);

  return (
    <FormStyled className="form form--profile" onSubmit={handleSubmit(onSubmit)}>
      <FormItemStyled className="form--item">
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <Input placeholder={t('form.name') as string} required {...field} />}
        />
        {errors.firstName && <FormErrorStyled className="form--error">{t(errors.firstName?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <Input placeholder={t('form.surname') as string} required {...field} />}
        />
        {errors.lastName && <FormErrorStyled className="form--error">{t(errors.lastName?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="gender"
          control={control}
          render={({ field: { value, onChange, ...other } }) => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {genders.map((gender) => (
                <div
                  style={{
                    display: 'flex',
                    gap: '0.6em',
                    alignItems: 'center',
                  }}
                  key={gender.value}
                >
                  <label htmlFor={gender.value}>{gender.name}</label>
                  <Input
                    {...other}
                    id={gender.value}
                    value={gender.value}
                    type="radio"
                    required
                    checked={gender.value === value}
                    onChange={onChange}
                  />
                </div>
              ))}
            </div>
          )}
        />
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="age"
          control={control}
          render={({ field: { value, ...other } }) => (
            <Input placeholder={t('form.age') as string} required value={value || ''} {...other} />
          )}
        />
        {errors.age && <FormErrorStyled className="form--error">{t(errors.age?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="phone"
          control={control}
          render={({ field }) => <Input placeholder={t('form.phone') as string} required {...field} />}
        />
        {errors.phone && <FormErrorStyled className="form--error">{t(errors.phone?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <FormItemStyled className="form--item">
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input placeholder="your@mail.com" required {...field} />}
        />
        {errors.email && <FormErrorStyled className="form--error">{t(errors.email?.message)}</FormErrorStyled>}
      </FormItemStyled>

      <input className="button button--primary button--medium" type="submit" value={t('form.send') as string} />
    </FormStyled>
  );
};

const mapStateToProps = (state: { profile: IProfile }) => ({
  profile: state.profile,
});

const FormProfileTranslated = withTranslation('common')(FormProfile);
export default connect(mapStateToProps, null)(FormProfileTranslated);
