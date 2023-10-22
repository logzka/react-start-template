import Input from './Input';
import '../../styles/_variables.scss';

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        size: {
            type: 'string',
            description: 'Input size',
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
        disabled: false,
        required: false,
        type: 'text',
        size: 'medium',
    },
};
