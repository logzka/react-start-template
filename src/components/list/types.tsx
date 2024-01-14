import { ReactNode } from 'react';
import { IProfile } from '../form/form-profile/types';

export type TListProps = {
  profile: IProfile;
  t?: (v: string) => ReactNode | string;
};

export type TPagination = {
  pageSize: number;
  pageNumber: number;
  total?: number;
};
