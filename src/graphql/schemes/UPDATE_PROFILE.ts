import { gql } from '@apollo/client';
/** Fragments */
import { ProfileFields } from '../fragments/profile.fr';

export const UPDATE_PROFILE = gql`
  ${ProfileFields}
  mutation updateProfile($input: UpdateProfileInput!) {
    profile {
      update(input: $input) {
        ...ProfileFields
      }
    }
  }
`;
