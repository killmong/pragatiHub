import React from "react";
import Header from "../header/page";
import Footer from "../footer/page";

export interface LayoutProps {
  children: React.ReactNode;
  isPublic?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-between flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
