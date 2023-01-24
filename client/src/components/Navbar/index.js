import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";
import { logout } from "../../utils/api";

export default () => {
  const userInfo = window.localStorage.user;
  return (
    <Navbar collapseOnSelect expand="lg" id="navDiv">
      <Navbar.Brand href="/home">Portfolio-Builder</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          {userInfo ? (
            <>
              <Nav.Link href="/mainprofile" activeclassname="active">
                Profile
              </Nav.Link>
              <Nav.Link href="/" activeclassname="active" onClick={logout}>
                Log Out
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login" activeclassname="active">
                Log In
              </Nav.Link>
              <Nav.Link
                href="/register"
                activeclassname="active"
                style={{ backgroundColor: "#fff", color: "black" }}
              >
                Sign Up
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
