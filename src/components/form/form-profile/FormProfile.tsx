import React, { ReactNode } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { withTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

/** Types */
import { IFormValues } from './types';

/** Styled Components */
import { FormStyled, FormItemStyled, FormErrorStyled } from '../form-styled-components';

/** Components */
import Input from "../../input/Input";

const schema = yup
    .object({
        firstName: yup.string().required('First Name is required'),
        lastName: yup.string().required('Last Name is required'),
        gender: yup.string().required('Gender is required'),
        age: yup.number().positive('Age must be a positive number above 18').integer().min(18, 'The min age is 18').required('Age is required'),
        phone: yup.string()
            .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                'Phone is not valid').required('Phone is required'),
        email: yup.string().email('Email is not valid').required('Email is required'),
    }).required();

const FormProfile = ({ t }: { t?: (v: string) => ReactNode | string }) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<IFormValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            gender: 'female',
            age: 18,
            phone: '',
            email: '',
        },
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        console.log(data);
        reset();
    };

    const genders = [{ value: 'female', name: 'Женский' }, { value: 'male', name: 'Мужской' }];

    return (
        <FormStyled
            className="form form--profile"
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormItemStyled className="form--item">
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => <Input placeholder={t('form.name')  as string} required {...field} />}
                />
                {errors.firstName && <FormErrorStyled className="form--error">{errors.firstName?.message}</FormErrorStyled>}
            </FormItemStyled>

            <FormItemStyled className="form--item">
                <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => <Input placeholder={t('form.surname') as string} required {...field} />}
                />
                {errors.lastName && <FormErrorStyled className="form--error">{errors.lastName?.message}</FormErrorStyled>}
            </FormItemStyled>

            <FormItemStyled className="form--item">
                <Controller
                    name="gender"
                    control={control}
                    render={({ field: { value, onChange, ...other} }) => <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>{
                        genders.map((gender) => <div
                        style={{
                            display: 'flex',
                            gap: '0.6em',
                            alignItems: 'center',
                        }} key={gender.value}>
                            <label htmlFor={gender.value}>{gender.name}</label>
                            <Input
                                {...other}
                                id={gender.value}
                                value={gender.value}
                                type='radio'
                                required
                                checked={gender.value === value}
                                onChange={onChange}
                            />
                        </div>)
                    }</div>}
                />
            </FormItemStyled>

            <FormItemStyled className="form--item">
                <Controller
                    name="age"
                    control={control}
                    render={({ field }) => <Input placeholder={t('form.age')  as string} required {...field} />}
                />
                {errors.age && <FormErrorStyled className="form--error">{errors.age?.message}</FormErrorStyled>}
            </FormItemStyled>

            <FormItemStyled className="form--item">
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => <Input placeholder={t('form.phone')  as string} required {...field} />}
                />
                {errors.phone && <FormErrorStyled className="form--error">{errors.phone?.message}</FormErrorStyled>}
            </FormItemStyled>

            <FormItemStyled className="form--item">
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input placeholder="your@mail.com" required {...field} />}
                />
                {errors.email && <FormErrorStyled className="form--error">{errors.email?.message}</FormErrorStyled>}
            </FormItemStyled>

            <input className="button button--primary button--medium" type="submit" value={t('form.send') as string} />
        </FormStyled>
    )
};

const FormProfileTranslated = withTranslation('common')(FormProfile)
export default FormProfileTranslated;
