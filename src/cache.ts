import { InMemoryCache, ApolloClient, makeVar } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        themes: {
          read() {
            return themeVar();
          },
        },
        categories: {
          read() {
            return categoryVar();
          },
        },
      },
    },
  },
});

export const themeVar = makeVar("lightTheme");
export const categoryVar = makeVar("past-launches");
export const client = new ApolloClient({
  cache,
  uri: "https://api.spacex.land/graphql",
});
