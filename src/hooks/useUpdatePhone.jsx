import { useMutation } from "@apollo/client";
import { EDIT_NUMBER } from "../persons/graphql-mutations";

const useUpdatePhone = (notifyError) => {
  const result = useMutation(EDIT_NUMBER, {
    onError: (e) => {
      notifyError(e.graphQLErrors[0].message);
    },
  });

  return result;
};

export default useUpdatePhone;
