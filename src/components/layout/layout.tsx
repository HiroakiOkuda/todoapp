import Head from "next/head";
import { Fragment, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
export const AppName = "Todo App";

export type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export const getLayout = (
  children: React.ReactElement,
  props: LayoutProps
): React.ReactElement => {
  return (
    <Layout {...props}>
      {children}
    </Layout>
  );
};

export default Layout;
