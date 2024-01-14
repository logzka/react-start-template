import { gql } from '@apollo/client';

export const UPDATE_PROFILE = gql`
  mutation updateProfile($input: UpdateProfileInput!) {
    profile {
      update(input: $input) {
        email
        id
        name
        signUpDate
      }
    }
  }
`;
