/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

import { StoryId } from '@storybook/types';

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

export type TCategory = {
  id: StoryId;
  name: string;
  photo?: string;
};

export interface IProduct {
  id: StoryId;
  name: string;
  photo: string;
  createdAt: string;
  price: number;
  category: TCategory;
  desc?: string;
  oldPrice?: number;
}

export type TOperation = ICost | IProfit;

export interface ICost {
  type: 'Cost';
  id: StoryId;
  name: string;
  createdAt: string;
  category: TCategory;
  amount: number;
  desc?: string;
}

export interface IProfit {
  type: 'Profit';
  id: StoryId;
  name: string;
  createdAt: string;
  category: TCategory;
  amount: number;
  desc?: string;
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): IProduct => {
  const randomInt: number = Math.round(Math.random() * 100);
  const id = `P_${createdAt}_${randomInt}`;
  return {
    createdAt,
    id,
    name: `${id}_product`,
    photo: 'https://www.some_photo',
    price: Math.random() * 1000,
    category: {
      id: `C_${id}`,
      name: `${id}_category`,
    },
    desc: undefined,
    oldPrice: undefined,
  };
};

export type TTypes = 'Cost' | 'Profit';

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): TOperation => {
  const randomInt: number = Math.round(Math.random() * 100);
  const id = `O_${createdAt}_${randomInt}`;
  const types: TTypes[] = ['Cost', 'Profit'];
  const randomTypesIndex: number = Math.round(Math.random()); //=> 0 || 1
  return {
    createdAt,
    id,
    type: types[randomTypesIndex],
    name: `${id}_operation`,
    category: {
      id: `C_${id}`,
      name: `${id}_category`,
    },
    amount: randomInt,
    desc: undefined,
  };
};
