/** Types */
import { TCake } from '../../api/cakes';

export interface ICartPageProps {
  cartCakes: TCake[];
  removeItemHandler?: (id: string) => void;
}
