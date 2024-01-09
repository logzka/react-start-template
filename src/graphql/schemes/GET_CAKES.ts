import { gql } from '@apollo/client';

export const GET_CAKES = gql`
  query getCakes($pageSize: Int!, $pageNumber: Int!) {
    products {
      getMany(input: { pagination: { pageSize: $pageSize, pageNumber: $pageNumber } }) {
        data {
          id
          name
          photo
          desc
          createdAt
          updatedAt
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
