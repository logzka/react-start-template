import { gql } from '@apollo/client';

/** Fragments */
import { ProductFields } from '../fragments/products.fr';
import { CategoryFields } from '../fragments/category.fr';

export const UPDATE_CAKE = gql`
  ${ProductFields}
  ${CategoryFields}
  mutation Patch($patchId: ID!, $input: ProductUpdateInput!) {
    products {
      patch(id: $patchId, input: $input) {
        category {
          ...CategoryFields
        }
        ...ProductFields
      }
    }
  }
`;
