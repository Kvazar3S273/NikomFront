import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOG_OUT } from "../../constants/actionTypes";
import { logoutservice } from "../../services/logout.service";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import logo from "../../../src/logoN.png"

const MyNavbar = () => {

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const logout = () => {
    logoutservice.logout();
    dispatch({type: LOG_OUT});
    navigator("/");
  };

  const {isAuth, username} = useSelector(redux => redux.auth);
  // console.log("User: ", username.name);
  const ref = useRef(null);
  const [navExpanded, setNavExpanded] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setNavExpanded(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  },[]);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-73px";
    }
    prevScrollpos = currentScrollPos;
  }
  // console.log("Auth user info", isAuth);

  return (
    <Navbar
      ref={ref}
      id="navbar"
      bg="light"
      expand="lg"
      onToggle={setNavExpanded}
      expanded={navExpanded}
      className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark"
    >
      <Container>
        <Nav className="me-auto" onClick={() => setNavExpanded(false)}>
          <Link className="navbar-brand" aria-current="page" to="/">
            <img src={logo} alt="" width="80" />
          </Link>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" onClick={() => setNavExpanded(false)}>
            <Link className="nav-link" aria-current="page" to="/">
              Nikom
            </Link>
          </Nav>

          <Nav className="me-auto" onClick={() => setNavExpanded(false)}>
            <Link className="nav-link" aria-current="page" to="/catalog">
              Каталог
            </Link>
          </Nav>

          <Nav className="me-auto" onClick={() => setNavExpanded(false)}>
            <Link className="nav-link" aria-current="page" to="/contacts">
              Контакти
            </Link>
          </Nav>

          {!isAuth ? (
            <Nav onClick={() => setNavExpanded(false)}>
              <Link className="nav-link" to="/login">
                Вхід
              </Link>
              <Link className="nav-link" to="/register">
                Реєстрація
              </Link>
            </Nav>
          ) : (
            <Nav onClick={() => setNavExpanded(false)}>
              <Link className="nav-link" to="/">
                {username.name}
              </Link>
              <Link className="nav-link" to="/" onClick={logout}>
                Вихід
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );



  // return (
  //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  //     <div className="container">
  //       <Link className="navbar-brand" to="/">
  //         Nikom
  //       </Link>
  //       <button
  //         className="navbar-toggler"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarSupportedContent"
  //         aria-controls="navbarSupportedContent"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //           <li className="nav-item">
  //             <Link className="nav-link active" aria-current="page" to="/">
  //             Каталог
  //             </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link className="nav-link" to="/">
  //             Контакти
  //             </Link>
  //           </li>
  //         </ul>

  //         {!isAuth ? 

  //           <ul className="navbar-nav">
  //             <li className="nav-item">
  //               <Link className="nav-link" to="/auth">
  //                 Auth
  //               </Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link className="nav-link" to="/login">
  //                 Вхід
  //               </Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link className="nav-link" to="/register">
  //                 Реєстрація
  //               </Link>
  //             </li>
  //           </ul>
  //           :
  //           <ul className="navbar-nav">
  //             <li className="nav-item">
  //               <Link className="nav-link" to="/profile">
  //                 {username}
  //               </Link>
  //             </li>
  //             <li className="nav-item">
  //               <Link className="nav-link" to="/logout">
  //                 Вихід
  //               </Link>
  //             </li>
  //           </ul>
            
  //         }

  //       </div>
  //     </div>
  //   </nav>
  // );
};

export default MyNavbar;
