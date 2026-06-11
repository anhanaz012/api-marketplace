import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Header />
      <div className="min-h-screen flex pb-34 flex-col items-center justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
