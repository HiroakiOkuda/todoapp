import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "@/store";
import { MeProvider } from "@/context/me-context";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <MeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MeProvider>
      </ApolloProvider>
    </Provider>
  );
}
