import { gql } from '@apollo/client';

/** Types */
// type TProduct = {
//   id: string,
//   name: string,
//   photo?: string,
//   desc?: string,
//   createdAt: Date,
//   updatedAt: Date,
//   oldPrice?: number,
//   price: number,
//   category: Category,
// };

export const GET_CAKES = gql`
  query ($pageSize: Int!, $pageNumber: Int!) {
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
