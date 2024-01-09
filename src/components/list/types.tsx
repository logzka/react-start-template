import { ReactNode } from 'react';
import { TCake } from 'src/api/cakes';
import { IProfile } from '../form/form-profile/types';

export type TListProps = {
  list: { cakes: TCake[]; pageSize: number; pageNumber: number };
  profile: IProfile;
  t?: (v: string) => ReactNode | string;
};
