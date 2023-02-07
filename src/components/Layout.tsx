import Head from "next/head";
import { Fragment, ReactNode } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export const AppName = "Todo App";

type LayoutProps = {
  children: ReactNode;
}
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

export default Layout;