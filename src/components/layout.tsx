import Head from "next/head";
import { Fragment, FunctionComponent, ReactNode } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export const AppName = "Todo App";

export type LayoutProps = {
  children: ReactNode;
};
const BaseLayout: FunctionComponent<LayoutProps> = ({
  children,
}: LayoutProps): React.ReactElement => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

type TopLayoutProps = {
  children: ReactNode;
};
const TopLayout: FunctionComponent<TopLayoutProps> = ({ children }) => {
  console.log(children);
  return (
    <Fragment>
      {children && Array.isArray(children) ? (
        children.map((c, i) => {
          if (i === 0) {
            return (
              <div key={`index_${i}`} className="f-Hero">
                {children[0]}
              </div>
            );
          } else {
            return (
              <div key={`index_${i}`} className="f-Content">
                {children[i]}
              </div>
            );
          }
        })
      ) : (
        <div className="f-Content">{children}</div>
      )}
    </Fragment>
  );
};

export const getLayout = (
  children: React.ReactElement,
  props: LayoutProps
): React.ReactElement => {
  return <BaseLayout {...props}>{children}</BaseLayout>;
};

export default TopLayout;
