import React, { useEffect, useRef, useState } from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../../src/logoN.png"

const AdminNavbar = () => {

    // const dispatch = useDispatch();
    // const navigator = useNavigate();

    const ref = useRef(null);
    const [navExpanded, setNavExpanded] = useState(false);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setNavExpanded(false);
        }
      };
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, []);

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


  return (
    <Navbar
    ref={ref}
      id="navbar"
      bg="success"
      expand="lg"
      onToggle={setNavExpanded}
      expanded={navExpanded}
      className="navbar navbar-expand-lg navbar-success fixed-top bg-success"
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
              Користувачі
            </Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      
    </Navbar>
  )
}

export default AdminNavbar
