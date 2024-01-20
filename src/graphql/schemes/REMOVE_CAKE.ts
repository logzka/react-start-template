import { gql } from '@apollo/client';

export const REMOVE_CAKE = gql`
  mutation Remove($removeId: ID!) {
    products {
      remove(id: $removeId) {
        id
      }
    }
  }
`;
