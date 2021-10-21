import {
  gql
} from "@apollo/client";
export const FETCH_USERS = gql`
query fetchUsers($term: String!) {
  search(query: $term, type: USER, first: 50){
    edges{
      node{
        ... on User {
          email
          avatarUrl
          id
          login
          bio
          url
          repositories(first: 10) {
            edges {
              node {
                description
                name
                url
              }
            }
          }
        }
      }
    }
  }
}
`;