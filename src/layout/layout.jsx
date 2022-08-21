import React from "react";
import FooterBar from "../components/footerBar/footerBar";
import Navbar from "../components/navbar/navbar";
const Layout = ({children}) => {
  return (
    <>
    <Navbar/>{children} <FooterBar/>
    </>
  );
}

export default Layout