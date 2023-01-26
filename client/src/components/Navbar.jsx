import React from "react";
import { Nav } from "react-bootstrap";
import { logout } from "../utils/api";

export default function Navbar() {
  const userInfo = window.localStorage.user;
  return (
    <div className="flex justify-between items-center px-[10vw] py-4 mx-auto text-white">
      <Nav.Link style={{ color: "white" }} href="/" activeclassname="active">
        <h3 className="text-white mb-0 font-semibold tracking-widest text-4xl">
          Folium
        </h3>
      </Nav.Link>
      {userInfo ? (
        <div className="flex space-x-6 mx-6 font-semibold text-base">
          <Nav.Link
            style={{ color: "white" }}
            href="/mainprofile"
            activeclassname="active"
          >
            Profile
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/" onClick={logout}>
            Log Out
          </Nav.Link>
        </div>
      ) : (
        <div className="flex space-x-6 mx-6 font-semibold text-base">
          <Nav.Link style={{ color: "white" }} href="/login">
            Log In
          </Nav.Link>
          <Nav.Link href="/register" style={{ color: "white" }}>
            Sign Up
          </Nav.Link>
        </div>
      )}
    </div>
  );
}
