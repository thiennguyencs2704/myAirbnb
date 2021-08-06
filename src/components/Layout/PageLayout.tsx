import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const PageLayout: React.FC = ({ children }) => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
