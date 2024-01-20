import { gql } from '@apollo/client';

/** Fragments */
import { ProfileFields } from '../fragments/profile.fr';

export const GET_PROFILE = gql`
  ${ProfileFields}
  query {
    profile {
      ...ProfileFields
    }
  }
`;
