import { gql } from '@apollo/client';

export const PASSWORD_CHANGE = gql`
  mutation Change($input: ChangePasswordInput!) {
    profile {
      password {
        change(input: $input) {
          success
        }
      }
    }
  }
`;
