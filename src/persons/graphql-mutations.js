import { gql } from "@apollo/client";

export const CREATE_PERSON = gql`
  mutation createPerson(
    $name: String!
    $street: String!
    $city: String!
    $phone: String
  ) {
    addPerson(name: $name, street: $street, city: $city, phone: $phone) {
      name
      id
      phone
      address {
        city
        street
      }
    }
  }
`;
