import React, { ReactNode } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { withTranslation } from "react-i18next";
import styled from 'styled-components';

/** Types */
import { IFormValues } from './types';

/** Components */
import Input from "../../input/Input";
import Select from "../../select/Select";

const FormProfileStyled = styled.form`
    display: grid;
    gap: 2em;
`;

const FormProfile = ({ t }: { t?: (v: string) => ReactNode | string }) => {
    const { control, handleSubmit } = useForm<IFormValues>({
        defaultValues: {
            firstName: '',
            lastName: '',
            gender: null,
            age: null,
            phone: '',
            email: '',
        },
    });

    const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);

    const genders = [{ id: 'female', name: 'Женский' }, { id: 'male', name: 'Мужской' }];

    return (
        <FormProfileStyled
            className="form form--profile"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input placeholder={`${t('form.name')}`} required {...field} />}
            />
            <Controller
                name="lastName"
                control={control}
                render={({ field }) => <Input placeholder={`${t('form.surname')}`} required {...field} />}
            />
            <Controller
                name="gender"
                control={control}
                render={({ field }) => <Select returnObject={false} items={genders} placeholder={`${t('form.gender')}`} required {...field} />}
            />
            <Controller
                name="age"
                control={control}
                render={({ field }) => <Input placeholder={`${t('form.age')}`} required {...field} />}
            />
            <Controller
                name="phone"
                control={control}
                render={({ field }) => <Input placeholder="+7 (999) 999 99 99" required {...field} />}
            />
            <Controller
                name="email"
                control={control}
                render={({ field }) => <Input placeholder="your@mail.com" required {...field} />}
            />
            <input className="button button--primary button--medium" type="submit" />
        </FormProfileStyled>
    )
};

const FormProfileTranslated = withTranslation('common')(FormProfile)
export default FormProfileTranslated;
