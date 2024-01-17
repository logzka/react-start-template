import { gql } from '@apollo/client';

export const ProductFields = gql`
  fragment ProductFields on Product {
    name
    price
    id
    desc
    photo
    oldPrice
  }
`;
