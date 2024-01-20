import { gql } from '@apollo/client';

export const ProfileFields = gql`
  fragment ProfileFields on Profile {
    firstName
    lastName
    gender
    age
    phone
    email
    id
    role
  }
`;
