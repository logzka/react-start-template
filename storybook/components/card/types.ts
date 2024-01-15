export interface ICardProps {
  type?: TCardType;
  category: TCategory;
  name: string;
  price: number;
  priceOld: number;
  description: string;
  imageUrl: string;
  // t?: (v: string) => ReactNode | string,
}

export type TCategory = { value: string; name: string };

export type TCardType = 'default' | 'disabled';
