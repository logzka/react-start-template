import { gql } from '@apollo/client';

// type Category {
//   name: String!
//   value: String!
// }

// type Product {
//   id: ID!
//   category: Category!
//   name: String!
//   photo: String
//   desc: String
//   oldPrice: Float
//   price: Float
// }

// type Pagination {
//   pageNumber: Int!
//   pageSize: Int!
//   total: Int!
// }

// type Query {
//   data: [Product!]
//   pagination: Pagination!
// }

export const GET_CAKES = gql`
  query getCakes($pageSize: Int!, $pageNumber: Int!) {
    products {
      getMany(input: { pagination: { pageSize: $pageSize, pageNumber: $pageNumber } }) {
        data {
          id
          category {
            name
            value
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
