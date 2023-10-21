export type TGender = 'Женский' | 'Мужской';

export interface IFormValues {
    firstName: string,
    lastName: string,
    gender: TGender,
    age: number,
    phone: string,
    email: string,
};
