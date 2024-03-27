import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import merge from "deepmerge";
import getConfig from "next/config";
import isEqual from 'lodash/isEqual';
import { useMemo } from "react";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: any;

const { serverRuntimeConfig } = getConfig();
const clientSideGqlEndpoint =
  process.env.CLIENT_SIDE_GRAPHQL ?? "http://localhost:3300/graphql";
const serverSideGqlEndpoint =
  process.env.SERVER_SIDE_GRAPHQL ?? serverRuntimeConfig.serverSideGqlEndpoint;

function createAppoloClient() {
  const httpLink = new HttpLink({
    uri:
      typeof window === "undefined"
        ? serverSideGqlEndpoint
        : clientSideGqlEndpoint,
  });
  const splitLink = httpLink;
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: splitLink,
    cache: new InMemoryCache({}),
    defaultOptions: {
      mutate: {
        errorPolicy: "all",
        fetchPolicy: "no-cache",
      },
      watchQuery: {
        errorPolicy: "all",
        fetchPolicy: "no-cache",
      },
    },
  });
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createAppoloClient();
  if (initialState) {
    const existingCache = _apolloClient.extract();
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    _apolloClient.cache.restore(data);
  }
  if(typeof window === 'undefined') return _apolloClient;
  if(!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function addApolloState(client: any, pageProps: any){
  if(pageProps?.props){
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }
  return pageProps;
}

export function useApollo(pageProps: any){
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}