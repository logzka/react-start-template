import { gql } from '@apollo/client';

export const CategoryFields = gql`
  fragment CategoryFields on Product {
    id
    name
    value
  }
`;
