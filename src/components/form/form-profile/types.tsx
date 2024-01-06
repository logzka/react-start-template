import { ReactNode } from 'react';

export type TGender = 'Женский' | 'Мужской';

export interface IProfile {
  firstName?: string;
  lastName?: string;
  gender?: string;
  age?: number;
  phone?: string;
  email?: string;
  role?: string;
}

export interface IFormProfileProps {
  profile: IProfile;
  t?: (v: string) => ReactNode | string;
}
