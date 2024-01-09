import { gql } from '@apollo/client';

export const ProfileFields = gql`
  fragment ProfileFields on Profile {
    name
    email
    id
  }
`;
