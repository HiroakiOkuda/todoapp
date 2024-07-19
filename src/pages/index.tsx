import Head from "next/head";
import { getLayout, LayoutProps } from "../components/layout";
import { NextPageWithLayout } from "./_app";

type IndexPageProps = {
  title: string;
};
const Home: NextPageWithLayout<IndexPageProps, LayoutProps> = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Top Page</p>
    </>
  );
};

Home.getLayout = getLayout;

export default Home;
