import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import FooterBar from "../components/footerBar/footerBar";
const Layout = ({children}) => {
  const location = useLocation()
  return (
    <>
    {location.pathname === "/" ?  <> <Navbar/> {children} <FooterBar/> </> : null}
  
    </>
  );
}

export default Layout