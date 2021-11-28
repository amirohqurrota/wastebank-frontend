import {
    ApolloClient,
    InMemoryCache,
    useQuery,
    gql
  } from "@apollo/client";

import {WebSocketLink} from '@apollo/client/link/ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: 'https://tight-foxhound-67.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'sgkc3qSjRKWP7iX4sibxm1R25h5WZfVEC1oyEsu24zJDktM393IWQ6cke6UFrRVl'
  },
});

const wsLink = new WebSocketLink({
  uri: 'wss://tight-foxhound-67.hasura.app/v1/graphql',
  options: {
    reconnect: true,
    connectionParams:{
      headers: {
        'x-hasura-admin-secret': 'sgkc3qSjRKWP7iX4sibxm1R25h5WZfVEC1oyEsu24zJDktM393IWQ6cke6UFrRVl'
      },
    }
  }
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value


const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);



const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});



  
export default client