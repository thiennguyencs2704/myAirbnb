import Head from "next/head";
import { FC } from "react";

interface HeadLayoutProps {
  title: string;
}

const HeadLayout: FC<HeadLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/airbnbIcon.png" />
      </Head>
      {children}
    </>
  );
};

export default HeadLayout;
