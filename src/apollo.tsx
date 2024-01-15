import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

/** https://www.apollographql.com/docs/react/networking/authentication#header */
const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URI || 'https://otus-graphql.beelzebub.uk/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

/** https://www.apollographql.com/docs/react/data/queries */
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // uri: 'https://otus-graphql.beelzebub.uk/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      ProductsResponse: {
        keyFields: [],
        fields: {
          data: {
            // keyArgs: false,
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
        },
      },
      ProductQueries: {
        keyFields: [],
      },
    },
  }),
});
