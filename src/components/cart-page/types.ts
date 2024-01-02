/** Types */
import { TCake } from '../../api/cakes';

export interface ICartPageProps {
  cartCakes: (TCake & { count: number })[];
  removeItemHandler?: (id: string) => void;
}
