import { gql } from '@apollo/client';

import { ProductFields } from '../fragments/products.fr';

export const UPDATE_CAKE = gql`
  ${ProductFields}
  mutation Patch($patchId: ID!, $input: ProductUpdateInput!) {
    products {
      patch(id: $patchId, input: $input) {
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
