import React from "react";
import { Outlet } from "react-router-dom";
// import { ScrollToTop } from "react-simple-scroll-up";
// import Footer from "../../footer/footer";
import Navbar from "../../navbar";

const DefaultLayout = () => {
  return (
    <>
      
      <Navbar />
      
      <main>{<Outlet />}</main>
      
      {/* <ScrollToTop 
        size={70} 
        offsetTop={50} 
        strokeWidth={5} 
        symbol="&#9650;" 
        style={{marginTop:"85vh", zIndex:"9999999"}}
        /> */}
      
      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;
