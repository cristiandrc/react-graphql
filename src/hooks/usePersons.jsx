import { useQuery } from "@apollo/client";
import { ALL_PERSONS } from "../persons/graphql-queries";

const usePersons = () => {
  const result = useQuery(ALL_PERSONS);
  return result;
};

export default usePersons;
