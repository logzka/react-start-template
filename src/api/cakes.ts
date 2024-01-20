import { v4 as uuidv4 } from 'uuid';

import { TCategory } from '../components/card/types';

export type TCake = {
  category: TCategory;
  name: string;
  price: string;
  oldPrice: string;
  desc: string;
  photo: string;
  id: string;
};

export const cakes: TCake[] = [
  {
    category: { value: 'cake', name: 'Торты', id: '' },
    name: 'Малиновый чизкейк',
    price: '1299',
    oldPrice: '1300',
    desc: 'Популярный десерт с сырной основой и тонким коржом из песочного теста с добавлением малинового пюре. Нежное творожное суфле, дополненное тонкой бисквитной прослойкой, прекрасное сочетание для любителей классики. В составе только натуральные молочные продукты. Без добавления растительных жиров.',
    photo:
      'https://shop-cdn1-2.vigbo.tech/shops/218522/products/21922955/images/3-9b48c64af285a36ca7de4fbc2d490de1.jpg',
    id: uuidv4(),
  },
  {
    category: { value: 'dessert', name: 'Десерты', id: '' },
    name: 'Брауни',
    price: '2399',
    oldPrice: '2700',
    desc: 'шоколадное пирожное характерного коричневого цвета (англ. brown — «коричневый»; отсюда и название), прямоугольные куски нарезанного шоколадного пирога. Традиционно для американской кухни. В зависимости от рецепта, может иметь консистенцию торта, кекса или печенья.',
    photo:
      'https://mykaleidoscope.ru/x/uploads/posts/2023-05/1684858638_mykaleidoscope-ru-p-avstriiskii-shokoladnii-tort-instagram-68.jpg',
    id: uuidv4(),
  },
  {
    category: { value: 'cake', name: 'Торты', id: '' },
    name: 'Медовик',
    price: '999',
    oldPrice: '1000',
    desc: 'Торт, распространённый в России и странах бывшего СССР. Состоит из трёх медовых коржей с прослойкой из сметанного крема.',
    photo:
      'https://mykaleidoscope.ru/uploads/posts/2021-09/1632821160_26-mykaleidoscope-ru-p-medovik-tvorozhnii-krasivo-foto-37.jpg',
    id: uuidv4(),
  },
];
