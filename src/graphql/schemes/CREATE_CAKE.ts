import { gql } from '@apollo/client';

import { ProductFields } from '../fragments/products.fr';
// import { CategoryFields } from '../fragments/category.fr';

export const CREATE_CAKE = gql`
  ${ProductFields}
  mutation Products($input: ProductAddInput!) {
    products {
      add(input: $input) {
        category {
          id
          name
          value
        }
        ...ProductFields
      }
    }
  }
`;
