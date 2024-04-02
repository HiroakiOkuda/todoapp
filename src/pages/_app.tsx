import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "@/store";
import { MeProvider } from "@/context/me-context";
import { FunctionComponent } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<T, U> = NextPage<T> & {
  getLayout?: (children: React.ReactElement, props: U) => React.ReactElement;
};

export type FunctionComponentWithLayout<T, U> = FunctionComponent<T> & {
  getLayout?: (children: React.ReactElement, props: U) => React.ReactElement;
};

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<any, any>;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <MeProvider>
          {getLayout(<Component {...pageProps} />, pageProps)}
        </MeProvider>
      </ApolloProvider>
    </Provider>
  );
}
