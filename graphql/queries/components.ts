import { gql } from "@apollo/client";

export const SEARCH_RESOURCE = gql`
   query searchAll($input: String!) {
      searchAll(input: $input) {
         title
         subtitle
         type
         resource
      }
   }
`;
