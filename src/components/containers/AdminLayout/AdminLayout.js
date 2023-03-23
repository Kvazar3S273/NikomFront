import React from "react";
import { Outlet } from "react-router-dom";
// import "./style.css";
// import Navigation from "./Navigation";
// import Topbar from "./Topbar";
// import MainPanel from "./MainPanel";
import { isRole } from '../../auth/Register/authAction';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import AdminNavbar from "./AdminNavbar";
import ProductCrud from "./ProductCrud";


const AdminLayout = () => {
  const { isAuth, username } = useSelector(redux => redux.auth);

  console.log('AdminLayout', username);

return (
  isAuth && isRole(username, "admin") ? 
  <>
    <main>
      {<Outlet />}
      <div className="adminContainer">
        <AdminNavbar />
        <div className="main">
          <ProductCrud />
          {/* <h1>Admin panel</h1> */}
        </div>
      </div>
    </main>
  </>
  : 
  <Link to="/" />
);
};

export default AdminLayout;