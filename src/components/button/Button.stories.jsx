import Button from './Button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        type: {
            type: 'string',
            description: 'Button type',
            defaultValue: 'primary',
            options: ['primary', 'secondary', 'danger', 'success', 'disabled'],
            control: {
                type: 'select',
            },
        },
        size: {
            type: 'string',
            description: 'Button size',
            defaultValue: 'medium',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
    },
};

export const Default = {
    args: {
        children: 'Button',
        icon: false,
        active: false,
        type: 'primary',
        size: 'medium',
    },
};

export const Icon = {
    args: {
        children: 'Icon',
        icon: true,
        active: false,
        type: 'primary',
        size: 'medium',
    },
};
