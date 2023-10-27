import Select from './Select';
import { MouseEventHandler } from 'react';

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        size: {
            type: 'string',
            description: 'Select size',
            defaultValue: 'medium',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
    },
};

const onChangeHandler = (e: MouseEventHandler<HTMLInputElement>) => {
    console.log(e);
};

export const Default = {
    args: {
        className: '',
        size: 'medium',
        // value: null,
        placeholder: 'select',
        items: [{ id: 1, name: 'someName' }],
        valueKey: 'id',
        name: 'name',
        returnObject: true,
        required: false,
        disabled: false,
        onChange: (e: MouseEventHandler<HTMLInputElement>) => onChangeHandler(e),
    },
};
