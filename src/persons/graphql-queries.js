import { gql } from "@apollo/client";

export const ALL_PERSONS = gql`
  query getPersons {
    allPersons {
      id
      name
      phone
      address {
        street
        city
      }
    }
  }
`;
