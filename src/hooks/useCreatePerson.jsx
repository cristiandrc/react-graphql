import { useMutation } from "@apollo/client";
import { CREATE_PERSON } from "../persons/graphql-mutations";
import { ALL_PERSONS } from "../persons/graphql-queries";

const useCreatePerson = () => {
  const result = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
  });

  return result;
};

export default useCreatePerson;
