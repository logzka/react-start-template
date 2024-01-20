import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation Mutation($email: String!, $password: String!) {
    profile {
      signin(email: $email, password: $password) {
        token
      }
    }
  }
`;
