import { gql } from '@apollo/client';

export const CategoryFields = gql`
  fragment CategoryFields on Category {
    id
    name
    value
  }
`;
