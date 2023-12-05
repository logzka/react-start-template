import { ReactNode } from 'react';

/** Types */
import { TCake } from '../../api/cakes';

export interface ICartPageProps {
  t?: (v: string, params?: any) => ReactNode | string;
  cartCakes: TCake[];
}
