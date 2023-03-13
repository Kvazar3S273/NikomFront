import React from "react";
import Navbar from "../../navbar";

export default props => (
  <>
    <Navbar />
    
        <div className="container">
            {props.children}
        </div>
  </>
);
