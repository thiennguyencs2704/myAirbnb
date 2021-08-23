import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PageLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
