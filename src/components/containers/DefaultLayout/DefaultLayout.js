import React from "react";
import { Outlet } from "react-router-dom";
import MyNavbar from "../../navbar";
// import { ScrollToTop } from "react-simple-scroll-up";
// import Footer from "../../footer/footer";

const DefaultLayout = () => {
  return (
    <>
      
      <MyNavbar />
      
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
