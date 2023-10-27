import React, { ReactNode } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { withTranslation } from "react-i18next";
import styled from 'styled-components';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

/** Types */
import { IFormValues } from './types';

/** Components */
import Input from "../../input/Input";
import Select from "../../select/Select";

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
            gender: 'Женский',
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

    const genders = [{ id: 'female', name: 'Женский' }, { id: 'male', name: 'Мужской' }];

    return (
        <FormProfileStyled
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
                    render={({ field }) => <Select returnObject={false} items={genders} placeholder={t('form.gender')  as string} required {...field} />}
                />
                {errors.gender && <FormErrorStyled className="form--error">{errors.gender?.message}</FormErrorStyled>}
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

            <input className="button button--primary button--medium" type="submit" />
        </FormProfileStyled>
    )
};

const FormProfileTranslated = withTranslation('common')(FormProfile)
export default FormProfileTranslated;
