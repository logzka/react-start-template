import { gql } from '@apollo/client';

/** Fragments */
import { CategoryFields } from '../fragments/category.fr';

export const GET_CATEGORIES = gql`
  ${CategoryFields}
  query GetCategories($input: CategoryGetManyInput) {
    categories {
      getMany(input: $input) {
        data {
          ...CategoryFields
        }
      }
    }
  }
`;
