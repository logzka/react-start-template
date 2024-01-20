export interface ICardProps {
  id: string;
  type?: TCardType;
  category: TCategory;
  name: string;
  price: number;
  oldPrice: number;
  desc: string;
  photo: string;
  // t?: (v: string) => ReactNode | string,
  updateList?: () => void;
  addToCartHandler?: (id: string, count: number) => void;
  count?: number;
}

export type TCategory = { value: string; name: string; id: string };

export type TCardType = 'default' | 'disabled';
