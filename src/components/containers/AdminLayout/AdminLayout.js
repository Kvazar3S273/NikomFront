import React from "react";
import { Outlet } from "react-router-dom";
// import "./style.css";
// import Navigation from "./Navigation";
// import Topbar from "./Topbar";
// import MainPanel from "./MainPanel";
// import { isRole } from '../../auth/register/authAction';
// import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


const AdminLayout = () => {
  const { isAuth, user } = useSelector(redux => redux.auth);

  return (
    // isAuth && isRole(user, 'admin') ?
    <>
      <main>
        {<Outlet />}
        <div className="adminContainer">
          {/* <Navigation /> */}

          <div className="main">
            {/* <Topbar /> */}
            {/* <MainPanel/> */}
            <h1>Admin panel</h1>
          </div>
        </div>
      </main>
    </>
    // :
    // <Link to='/' />
  );
};

export default AdminLayout;