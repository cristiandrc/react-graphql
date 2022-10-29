import { useMutation } from "@apollo/client";
import { CREATE_PERSON } from "../persons/graphql-mutations";
import { ALL_PERSONS } from "../persons/graphql-queries";

const useCreatePerson = ({ notifyError }) => {
  const result = useMutation(CREATE_PERSON, {
    refetchQueries: [{ query: ALL_PERSONS }],
    onError: (error) => {
      notifyError(error.graphQLErrors[0].message);
    },
  });

  return result;
};

export default useCreatePerson;
