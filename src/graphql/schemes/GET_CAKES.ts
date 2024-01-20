import { gql } from '@apollo/client';

/** Fragments */
import { CategoryFields } from '../fragments/category.fr';

export const GET_CAKES = gql`
  ${CategoryFields}
  query getCakes($pageSize: Int!, $pageNumber: Int!) {
    products {
      getMany(input: { pagination: { pageSize: $pageSize, pageNumber: $pageNumber } }) {
        data {
          id
          category {
            ...CategoryFields
          }
          name
          photo
          desc
          oldPrice
          price
        }
        pagination {
          pageSize
          pageNumber
          total
        }
      }
    }
  }
`;
