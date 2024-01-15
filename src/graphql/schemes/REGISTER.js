import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Register($email: String!, $password: String!) {
    profile {
      signup(email: $email, password: $password) {
        token
      }
    }
  }
`;
